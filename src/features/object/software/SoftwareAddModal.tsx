import {
  Modal,
  Stack,
  Group,
  Select,
  Button,
  Grid,
} from '@mantine/core';
import { useState } from 'react';
import { FloatingInput } from '../../../UI/input/FloatingInput';
import { FloatingSelect } from '../../../UI/input/FloatingSelect';

interface SoftwareAddModalProps {
  opened: boolean;
  onClose: () => void;
}

export const SoftwareAddModal: React.FC<SoftwareAddModalProps> = ({
  opened,
  onClose,
}) => {
  const [subject, setSubject] = useState<string | null>(null);
  const [currency, setCurrency] = useState<string | null>(null);
  const [licenseType, setLicenseType] = useState<string | null>(null);

  const handleSubmit = () => {
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      size="xl"
      withCloseButton={false}
    >
      <Stack>

        {/* 🔹 Title */}
        <Group justify="center">
          <h2>Добавление ПО</h2>
        </Group>

        <Grid>

        <Grid.Col span={6}>
            <FloatingSelect
                labelText="Субъект"
                value={subject}
                onChange={setSubject}
                data={[
                { value: 'private', label: 'Private Sector' },
                { value: 'public', label: 'Public Sector' },
                ]}
            />
        </Grid.Col>

          <Grid.Col span={6}>
            <FloatingInput labelText="Название ПО" />
          </Grid.Col>

          <Grid.Col span={6}>
            <FloatingInput labelText="Назначение ПО" />
          </Grid.Col>

          <Grid.Col span={6}>
            <FloatingInput labelText="Производитель ПО" />
          </Grid.Col>

          <Grid.Col span={6}>
            <FloatingInput labelText="Поставщик ПО" />
          </Grid.Col>

          <Grid.Col span={6}>
            <FloatingInput
              labelText="Дата приобретения"
              type="date"
            />
          </Grid.Col>

          <Grid.Col span={6}>
            <FloatingInput labelText="Сумма приобретения" />
          </Grid.Col>

          <Grid.Col span={6}>
            <Select
              placeholder="Валюта суммы"
              value={currency}
              onChange={setCurrency}
              data={[
                { value: 'сом', label: 'Сом' },
                { value: 'евро', label: 'Евро' },
                { value: 'доллар', label: 'Доллар' },
              ]}
            />
          </Grid.Col>

          <Grid.Col span={6}>
            <FloatingInput
              labelText="Дата последнего обновления"
              type="date"
            />
          </Grid.Col>

          <Grid.Col span={6}>
            <FloatingInput
              labelText="Дата окончания лицензии"
              type="date"
            />
          </Grid.Col>

          <Grid.Col span={6}>
            <FloatingInput labelText="Версия ПО" />
          </Grid.Col>

          <Grid.Col span={6}>
            <Select
              placeholder="Тип лицензии"
              value={licenseType}
              onChange={setLicenseType}
              data={[
                { value: 'commercial', label: 'Коммерческая' },
                { value: 'open', label: 'Open Source' },
                { value: 'trial', label: 'Триал' },
              ]}
            />
          </Grid.Col>

          <Grid.Col span={6}>
            <FloatingInput
              labelText="Количество лицензий"
              type="number"
            />
          </Grid.Col>

        </Grid>

        {/* 🔹 Buttons */}
        <Group justify="center" mt="md">
          <Button variant="default" onClick={onClose}>
            Отменить
          </Button>
          <Button onClick={handleSubmit}>
            Подтвердить
          </Button>
        </Group>

      </Stack>
    </Modal>
  );
};