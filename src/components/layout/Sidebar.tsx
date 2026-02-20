// import { Stack, NavLink, Collapse} from '@mantine/core';
// import { Link, useLocation } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { useState } from 'react';
// import { IconChevronDown, IconChevronRight } from '@tabler/icons-react';

// export const Sidebar: React.FC = () => {
//   const { t } = useTranslation();
//   const location = useLocation();

//   // Стейт для открытия/закрытия папок
//   const [objectsOpen, setObjectsOpen] = useState(true);
//   const [subjectsOpen, setSubjectsOpen] = useState(true);

//   const menuItems = [
//     {
//       label: t('Objects'),
//       opened: objectsOpen,
//       setOpened: setObjectsOpen,
//       children: [
//         { label: t('AI'), path: '/objects/ai' },
//         { label: t('Software'), path: '/objects/software' },
//       ],
//     },
//     {
//       label: t('Subjects'),
//       opened: subjectsOpen,
//       setOpened: setSubjectsOpen,
//       children: [
//         { label: t('Private Sector'), path: '/subjects/private-sector' },
//       ],
//     },
//   ];

//   return (
//     <div style={{ width: 280, minHeight: '100vh', padding: 16 }}>
//       <Stack>
//         {menuItems.map((item) => (
//           <div key={item.label}>
//             {/* Главная папка */}
//             <NavLink
//               label={item.label}
//               rightSection={
//                 item.opened ? <IconChevronDown size={16} /> : <IconChevronRight size={16} />
//               }
//               onClick={() => item.setOpened(!item.opened)}
//               style={{
//                 borderRadius: 12,
//                 padding: '8px 12px',
//                 fontWeight: 600,
//               }}
//             />

//             {/* Дочерние элементы */}
//             <Collapse in={item.opened}>
//               <Stack spacing={4} pl={20} mt={4}>
//                 {item.children.map((child) => {
//                   const isActive = location.pathname === child.path;
//                   return (
//                     <NavLink
//                       key={child.path}
//                       label={child.label}
//                       component={Link}
//                       to={child.path}
//                       active={isActive}
//                       style={{
//                         borderRadius: 12,
//                         padding: '6px 10px',
//                         backgroundColor: isActive ? '#e7f5ff' : 'transparent',
//                         border: '1px solid',
//                         borderColor: isActive ? '#228be6' : 'transparent',
//                         fontWeight: 500,
//                       }}
//                     />
//                   );
//                 })}
//               </Stack>
//             </Collapse>
//           </div>
//         ))}
//       </Stack>
//     </div>
//   );
// };


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

  // Папки для открытия/закрытия
  const [openStates, setOpenStates] = useState<{ [key: string]: boolean }>({
    objects: true,
    subjects: true,
  });

  const toggleFolder = (key: string) => {
    setOpenStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const menu: MenuItem[] = [
    {
      label: 'Objects',
      children: [
        { label: 'AI', path: '/objects/ai' },
        { label: 'Software', path: '/objects/software' },
      ],
    },
    {
      label: 'Subjects',
      children: [
        { label: 'Private Sector', path: '/subjects/private-sector' },
      ],
    },
  ];

  const renderMenu = (items: MenuItem[], parentKey?: string) => {
    return items.map((item) => {
      const key = parentKey ? parentKey + '-' + item.label : item.label;

      const hasChildren = !!item.children && item.children.length > 0;

      const isOpen = parentKey ? openStates[parentKey.toLowerCase()] : openStates[item.label.toLowerCase()];

      // Active если путь совпадает
      const isActive = item.path ? location.pathname === item.path : false;

      return (
        <div key={key}>
          <NavLink
            label={item.label}
            rightSection={
              hasChildren
                ? isOpen
                  ? <IconChevronDown size={16} />
                  : <IconChevronRight size={16} />
                : undefined
            }
            onClick={() => hasChildren && toggleFolder(item.label.toLowerCase())}
            component={item.path ? Link : undefined}
            to={item.path || undefined}
            active={isActive}
            style={{
              borderRadius: 12,
              padding: '8px 12px',
              fontWeight: hasChildren ? 600 : 500,
              backgroundColor: isActive ? '#e7f5ff' : 'transparent',
              border: isActive ? '1px solid #228be6' : 'none',
              marginBottom: 4,
            }}
          />

          {hasChildren && (
            <Collapse in={isOpen}>
              <Stack spacing={4} pl={16} mt={4}>
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