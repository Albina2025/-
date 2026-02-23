import { Modal, Button, Group, Stack } from '@mantine/core';
import { useState } from 'react';
import { FloatingSelect } from '../../../UI/input/FloatingSelect';

interface SoftwareFilterModalProps {
  opened: boolean;
  onClose: () => void;
}

export const SoftwareFilterModal: React.FC<SoftwareFilterModalProps> = ({ opened, onClose }) => {
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
    <Modal opened={opened} onClose={onClose} size="sm" centered>
      <Stack >
        <FloatingSelect
          labelText="Субъект"
          placeholder="Субъект"
          value={subject}
          onChange={setSubject}
          data={[
            { value: 'private', label: 'Private Sector' },
            { value: 'public', label: 'Public Sector' },
          ]}
        />

       

        <Group mt="md">
          <Button color="black" onClick={handleReset}>
            Сбросить
          </Button>
          <Button color="black" onClick={handleApply}>Применить фильтры</Button>
        </Group>
      </Stack>
    </Modal>
  );
};