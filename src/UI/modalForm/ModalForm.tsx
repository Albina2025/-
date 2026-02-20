import { Modal, TextInput, Button, Stack } from '@mantine/core';
import { useState } from 'react';

interface ModalFormProps {
  opened: boolean;
  onClose: () => void;
}

export const ModalForm: React.FC<ModalFormProps> = ({ opened, onClose }) => {
  const [formData, setFormData] = useState({ name: '', value: '' });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    console.log(formData); // Бул жерде backend API чакырып кошсо болот
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Add / Filter">
      <Stack>
        <TextInput
          label="Name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
        <TextInput
          label="Value"
          value={formData.value}
          onChange={(e) => handleChange('value', e.target.value)}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </Stack>
    </Modal>
  );
};
