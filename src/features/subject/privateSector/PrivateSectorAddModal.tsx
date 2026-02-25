import {
 
  Stack,
  Group,
  Box,
  Button,
  Grid,
  Title,
} from '@mantine/core';
import { useState } from 'react';
import { FloatingInput } from '../../../UI/input/FloatingInput';
import { FloatingSelect } from '../../../UI/input/FloatingSelect';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../store/dataSlice';
import { BaseModal } from '../../../UI/modal/BaseModal';

interface PrivateSectorAddModalProps {
  opened: boolean;
  onClose: () => void;
}

export const PrivateSectorAddModal: React.FC<
  PrivateSectorAddModalProps
> = ({ opened, onClose }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    subject: '',
    name: '',
    purpose: '',
    status: '',
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    dispatch(
      addItem({
        id: crypto.randomUUID(),
        type: 'privateSector',
        data: {
          action: 'Create',
          subject: form.subject,
          name: form.name,
          purpose: form.purpose,
          status: form.status,
        },
      })
    );

    setForm({
      subject: '',
      name: '',
      purpose: '',
      status: '',
    });

    onClose();
  };

  return (
    <BaseModal
      opened={opened}
      onClose={onClose}
      radius={15}
      centered
      size={1200} 
      withCloseButton={false}
    >
      <Stack>
        <Box
          p="md"
          style={{
            border: '1px solid #303d43',
            borderRadius: 8,
          }}
        >
          <Title order={5} ta="center" mb="md">
            Добавить частный сектор
          </Title>

          <Grid>
            <Grid.Col span={6}>
              <FloatingInput
                labelText="Наименование"
                value={form.subject}
                onChange={(e) =>
                  handleChange('subject', e.currentTarget.value)
                }
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <FloatingInput
                labelText="Вышестоящий"
                value={form.name}
                onChange={(e) =>
                  handleChange('name', e.currentTarget.value)
                }
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <FloatingInput
                labelText="Адрес"
                value={form.purpose}
                onChange={(e) =>
                  handleChange('purpose', e.currentTarget.value)
                }
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <FloatingSelect
                labelText="Статус"
                value={form.status}
                onChange={(value) =>
                  handleChange('status', value || '')
                }
                data={[
                  { value: 'active', label: 'Активный' },
                  { value: 'inactive', label: 'Неактивный' },
                ]}
              />
            </Grid.Col>
          </Grid>
        </Box>

        <Group justify="center">
          <Button variant="default" onClick={onClose}>
            Отменить
          </Button>
          <Button color="black" onClick={handleSubmit}>
            Подтвердить
          </Button>
        </Group>
      </Stack>
    </BaseModal>
  );
};