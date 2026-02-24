import { Stack, NavLink, Collapse } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { IconChevronDown, IconChevronRight } from '@tabler/icons-react';

interface MenuItem {
  label: string;
  path?: string;
  children?: MenuItem[];
}

export const Sidebar: React.FC = () => {
  const location = useLocation();

 
  const [openStates, setOpenStates] = useState<{ [key: string]: boolean }>({
    objects: true,
    subjects: true,
  });

  const toggleFolder = (key: string) => {
    setOpenStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const menu: MenuItem[] = [
    
    {
      label: 'Субъекты',
      children: [
        { label: 'Частный сектор', path: '/subjects/private-sector' },
      ],
    },
    {
      label: 'Объекты',
      children: [
        { label: 'ИИ', path: '/objects/ai' },
        { label: 'ПО', path: '/objects/software' },
      ],
    },
  ];

  const renderMenu = (items: MenuItem[], parentKey?: string) => {
    return items.map((item) => {
      const key = parentKey ? parentKey + '-' + item.label : item.label;

      const hasChildren = !!item.children && item.children.length > 0;

      const isOpen = parentKey ? openStates[parentKey.toLowerCase()] : openStates[item.label.toLowerCase()];

     
      const isActive = item.path ? location.pathname === item.path : false;

      return (
        <div key={key}>
          <NavLink
            label={item.label}
            active={isActive}
            rightSection={
              hasChildren
                ? isOpen
                  ? <IconChevronDown size={16} />
                  : <IconChevronRight size={16} />
                : undefined
            }
            onClick={() => hasChildren && toggleFolder(item.label.toLowerCase())}
            renderRoot={(props) =>
              item.path ? (
                <Link {...props} to={item.path} />
              ) : (
                <div {...props} />
              )
            }
          />

          {hasChildren && (
            <Collapse in={isOpen}>
              <Stack gap={4} pl={16} mt={4} >
                {renderMenu(item.children!, item.label.toLowerCase())}
              </Stack>
            </Collapse>
          )}
        </div>
      );
    });
  };

  return (
    <div style={{ width: 280, minHeight: '100vh', padding: 16 }}>
      <Stack>
        {renderMenu(menu)}
      </Stack>
    </div>
  );
};