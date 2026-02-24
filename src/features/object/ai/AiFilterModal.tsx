import { Modal, Button, Group,  Stack } from '@mantine/core';
import { useState } from 'react';
import { FloatingSelect } from '../../../UI/input/FloatingSelect';

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
    <Modal 
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
            <Button
                color="black"
                onClick={handleReset}
                radius="md"
                fullWidth
            >
                Сбросить
            </Button>

            <Button
                color="black"
                onClick={handleApply}
                radius="md"
                fullWidth
            >
                Применить фильтры
            </Button>
        </Group>
      </Stack>
    </Modal>
  );
};