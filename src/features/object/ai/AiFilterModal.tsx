import {  Group,  Stack } from '@mantine/core';
import { useState } from 'react';
import { FloatingSelect } from '../../../UI/input/FloatingSelect';
import { BaseModal } from '../../../UI/modal/BaseModal';
import { BaseButton } from '../../../UI/button/BaseButton';


interface AIFilterModalProps {
  opened: boolean;
  onClose: () => void;
}

export const AiFilterModal: React.FC<AIFilterModalProps> = ({ opened, onClose }) => {
  const [subject, setSubject] = useState<string | null>(null);
  const [platform, setPlatform] = useState<string | null>(null);

  const handleReset = () => {
    setSubject(null);
    setPlatform(null);
  };

  const handleApply = () => {
    console.log('Selected Subject:', subject);
    console.log('Selected Platform:', platform);
    onClose(); 
  };

  return (
    <BaseModal
        opened={opened} 
        onClose={onClose} 
        radius={15}
        withCloseButton={false}   
        centered
        size="lg"
    >
      <Stack gap="xs">
        <FloatingSelect
            labelText="Выберите субъект"
            radius={10}
            value={subject}
            onChange={setSubject}
            data={[
                { value: 'private', label: 'Private Sector' },
                { value: 'public', label: 'Public Sector' },
            ]}
        />

        <FloatingSelect
            labelText="Тип вычислительной платформы"
            radius={10}
            value={platform}
            onChange={setPlatform}
            data={[
                { value: 'ai', label: 'AI' },
                { value: 'software', label: 'Software' },
            ]}
        />

        <Group mt="md" grow>
            <BaseButton
                onClick={handleReset}
                fullWidth
                variantType="primary"
            >
                Сбросить
            </BaseButton>

            <BaseButton
                onClick={handleApply}
                fullWidth
                variantType="primary"
            >
                Применить фильтры
            </BaseButton>
        </Group>
      </Stack>
    </BaseModal>
  );
};