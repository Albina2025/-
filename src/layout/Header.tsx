import React from 'react';
import { Group, Button, Select } from "@mantine/core";
import { useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { t, i18n } = useTranslation();
  const isDark = colorScheme === 'dark';

  return (
    <Group
      justify="space-between"
      // px="xl"
      style={{
        height: '100%',
         maxWidth: '100%',  
      }}
    >

      <div style={{ fontWeight: 700, fontSize: 28 }}>
        КЦОКБ
      </div>

      <Group gap="md"  color='#fff'>

        <Select
        
          value={i18n.language}   
          defaultValue="ru"
          onChange={(lang) => lang && i18n.changeLanguage(lang)}
          data={[
            { value: 'ru', label: 'Русский' },
            { value: 'kg', label: 'Кыргызча' },
            
          ]}
          size="md"
          radius="xl"
          w={160}
          styles={{
            input: {
              backgroundColor: isDark ? '#161d21' : '#fdfdfd',
              color: isDark ? '#fff' : '#000',
            },
            dropdown: {
              backgroundColor: isDark ? '#161d21' : '#ffffff',
            },
          }}
        />


        <Button
          variant="outline"
          onClick={() => toggleColorScheme()}
          radius="xl"
        >
          {isDark ? <IconSun size={24} /> : <IconMoonStars size={24} />}
        </Button>

        <Button
          variant="outline"
          radius="xl"
        >
          {t('Выйти')}
        </Button>

      </Group>
    </Group>
  );
};