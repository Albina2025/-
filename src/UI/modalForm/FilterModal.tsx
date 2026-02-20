import { Modal, Button, Group, Select, Stack } from '@mantine/core';
import { useState } from 'react';

interface FilterModalProps {
  opened: boolean;
  onClose: () => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({ opened, onClose }) => {
  const [subject, setSubject] = useState<string | null>(null);
  const [platform, setPlatform] = useState<string | null>(null);

  const handleReset = () => {
    setSubject(null);
    setPlatform(null);
  };

  const handleApply = () => {
    console.log('Selected Subject:', subject);
    console.log('Selected Platform:', platform);
    onClose(); // Закрыть модал после применения фильтров
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Filter" size="sm" centered>
      <Stack spacing="md">
        <Select
          label="Субъект"
          placeholder="Выберите субъект"
          value={subject}
          onChange={setSubject}
          data={[
            { value: 'private', label: 'Private Sector' },
            { value: 'public', label: 'Public Sector' },
          ]}
        />

        <Select
          label="Тип вычислительной платформы"
          placeholder="Выберите тип"
          value={platform}
          onChange={setPlatform}
          data={[
            { value: 'ai', label: 'AI' },
            { value: 'software', label: 'Software' },
          ]}
        />

        <Group position="apart" mt="md">
          <Button color="gray" onClick={handleReset}>
            Сбросить
          </Button>
          <Button onClick={handleApply}>Применить фильтры</Button>
        </Group>
      </Stack>
    </Modal>
  );
};