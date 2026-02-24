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
    <Modal 
        opened={opened} 
        onClose={onClose}
        size="lg" 
        radius={15}
        centered
        withCloseButton={false}
    >
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

       

        <Group mt="md" grow>
            <Button color="black" onClick={handleReset} radius={"md"}>
                Сбросить
            </Button>
            <Button color="black" onClick={handleApply} radius={"md"}>
                Применить фильтры
            </Button>
        </Group>
      </Stack>
    </Modal>
  );
};