import {Modal,  Stack, Group, TextInput, Switch, Button, Grid } from '@mantine/core';
import { useState } from 'react';
import { FloatingInput } from '../../../UI/input/FloatingInput';
import { FloatingSelect } from '../../../UI/input/FloatingSelect';

interface AiAddModalProps {
  opened: boolean;
  onClose: () => void;
}

export const AiAddModal: React.FC<AiAddModalProps> = ({ opened, onClose }) => {
  const [subject, setSubject] = useState<string | null>(null);
  const [platformType, setPlatformType] = useState<string | null>(null);
  const [useAPI, setUseAPI] = useState(false);

  const handleSubmit = () => {
    console.log({
      subject,
      platformType,
      useAPI,
    });
    onClose();
  };

  return (
    <Modal
        opened={opened} 
        onClose={onClose} 
        title="Добавление ИИ" 
        size="lg" 
        centered
    >
      <Stack >
        <Stack >
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
              <FloatingSelect
               
                labelText="Тип вычислительной платформы"
                value={platformType}
                onChange={setPlatformType}
                data={[
                  { value: 'ai', label: 'AI' },
                  { value: 'software', label: 'Software' },
                ]}
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <FloatingInput labelText="Наименование оборудования" />
            </Grid.Col>
            <Grid.Col span={6}>
              <FloatingInput labelText="Назначение оборудования" />
            </Grid.Col>

            <Grid.Col span={6}>
              <FloatingInput labelText="Ответственное подразделение-владелец" />
            </Grid.Col>
            <Grid.Col span={6}>
              <FloatingInput labelText="Поставщик оборудования" />
            </Grid.Col>

            <Grid.Col span={12}>
              <FloatingInput labelText="Дата приобретения" />
            </Grid.Col>
            <Grid.Col span={6}>
              <FloatingInput labelText="Сумма приобретения" />
            </Grid.Col>

            <Grid.Col span={6}>
              <FloatingSelect
                labelText="Валюта суммы"
                data={[
                  { value: 'usd', label: 'USD' },
                  { value: 'eur', label: 'EUR' },
                ]}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <FloatingInput labelText="Краткие характеристики" />
            </Grid.Col>
          </Grid>
        </Stack>

     
        <Stack >
          <Group>
            <Switch
              label="Используется API"
              checked={useAPI}
              onChange={(event) => setUseAPI(event.currentTarget.checked)}
            />
          </Group>

          <Grid>
            <Grid.Col span={6}>
              <TextInput placeholder="Наименование модели ИИ" />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput placeholder="Назначение модели ИИ" />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput placeholder="Разработчик / поставщик модели ИИ" />
            </Grid.Col>
          </Grid>
        </Stack>

        {/* Кнопки */}
        <Group  mt="md">
          <Button variant="default" onClick={onClose}>Отменить</Button>
          <Button onClick={handleSubmit}>Подтвердить</Button>
        </Group>
      </Stack>
    </Modal>
  );
};

