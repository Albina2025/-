


import { Modal, Stack, Group, TextInput, Select, Switch, Button, Grid } from '@mantine/core';
import { useState } from 'react';

interface ModalFormProps {
  opened: boolean;
  onClose: () => void;
}

export const ModalForm: React.FC<ModalFormProps> = ({ opened, onClose }) => {
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
    <Modal opened={opened} onClose={onClose} title="Добавление ИИ" size="lg" centered>
      <Stack spacing="md">
        {/* Аппаратная платформа (железо) */}
        <Stack spacing="sm">
          <Grid>
            <Grid.Col span={6}>
              <Select
                // label="Субъект *"
                placeholder="Субъект"
                value={subject}
                onChange={setSubject}
                data={[
                  { value: 'private', label: 'Private Sector' },
                  { value: 'public', label: 'Public Sector' },
                ]}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Select
                // label="Тип вычислительной платформы *"
                placeholder="Тип вычислительной платформы"
                value={platformType}
                onChange={setPlatformType}
                data={[
                  { value: 'ai', label: 'AI' },
                  { value: 'software', label: 'Software' },
                ]}
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <TextInput placeholder="Наименование оборудования" />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput placeholder="Назначение оборудования" />
            </Grid.Col>

            <Grid.Col span={6}>
              <TextInput placeholder="Ответственное подразделение-владелец" />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput placeholder="Поставщик оборудования" />
            </Grid.Col>

            <Grid.Col span={6}>
              <TextInput placeholder="Дата приобретения" />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput placeholder="Сумма приобретения" />
            </Grid.Col>

            <Grid.Col span={6}>
              <Select
                placeholder="Валюта суммы"
                data={[
                  { value: 'usd', label: 'USD' },
                  { value: 'eur', label: 'EUR' },
                ]}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput placeholder="Краткие характеристики" />
            </Grid.Col>
          </Grid>
        </Stack>

        {/* Модель искусственного интеллекта */}
        <Stack spacing="sm" mt="md">
          <Group position="apart">
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
        <Group position="right" mt="md">
          <Button variant="default" onClick={onClose}>Отменить</Button>
          <Button onClick={handleSubmit}>Подтвердить</Button>
        </Group>
      </Stack>
    </Modal>
  );
};

// import { Modal, Stack, Group, TextInput, Select, Switch, Button, Grid } from '@mantine/core';
// import { useState } from 'react';

// interface ModalFormProps {
//   opened: boolean;
//   onClose: () => void;
// }

// export const ModalForm: React.FC<ModalFormProps> = ({ opened, onClose }) => {
//   const [subject, setSubject] = useState<string | null>(null);
//   const [platformType, setPlatformType] = useState<string | null>(null);
//   const [useAPI, setUseAPI] = useState(false);

//   const handleSubmit = () => {
//     console.log({
//       subject,
//       platformType,
//       useAPI,
//     });
//     onClose();
//   };

//   return (
//     <Modal opened={opened} onClose={onClose} title="Добавление ИИ" size="lg" centered>
//       <Stack spacing="md">
//         {/* Аппаратная платформа (железо) */}
//         <Stack spacing="sm">
//           <Grid>
//             <Grid.Col span={6}>
//               <Select
//                 label="Субъект"
//                 placeholder="Выберите субъект"
//                 value={subject}
//                 onChange={setSubject}
//                 data={[
//                   { value: 'private', label: 'Private Sector' },
//                   { value: 'public', label: 'Public Sector' },
//                 ]}
//                 nothingFound="Не найдено"
//               />
//             </Grid.Col>
//             <Grid.Col span={6}>
//               <Select
//                 label="Тип вычислительной платформы"
//                 placeholder="Выберите тип"
//                 value={platformType}
//                 onChange={setPlatformType}
//                 data={[
//                   { value: 'ai', label: 'AI' },
//                   { value: 'software', label: 'Software' },
//                 ]}
//                 nothingFound="Не найдено"
//               />
//             </Grid.Col>

//             <Grid.Col span={6}>
//               <TextInput
//                 label="Наименование оборудования"
//                 placeholder="Введите наименование оборудования"
//               />
//             </Grid.Col>
//             <Grid.Col span={6}>
//               <TextInput
//                 label="Назначение оборудования"
//                 placeholder="Введите назначение оборудования"
//               />
//             </Grid.Col>

//             <Grid.Col span={6}>
//               <TextInput
//                 label="Ответственное подразделение-владелец"
//                 placeholder="Введите подразделение-владелец"
//               />
//             </Grid.Col>
//             <Grid.Col span={6}>
//               <TextInput
//                 label="Поставщик оборудования"
//                 placeholder="Введите поставщика оборудования"
//               />
//             </Grid.Col>

//             <Grid.Col span={6}>
//               <TextInput
//                 label="Дата приобретения"
//                 placeholder="Введите дату приобретения"
//               />
//             </Grid.Col>
//             <Grid.Col span={6}>
//               <TextInput
//                 label="Сумма приобретения"
//                 placeholder="Введите сумму приобретения"
//               />
//             </Grid.Col>

//             <Grid.Col span={6}>
//               <Select
//                 label="Валюта суммы"
//                 placeholder="Выберите валюту"
//                 data={[
//                   { value: 'usd', label: 'USD' },
//                   { value: 'eur', label: 'EUR' },
//                 ]}
//                 nothingFound="Не найдено"
//               />
//             </Grid.Col>
//             <Grid.Col span={6}>
//               <TextInput
//                 label="Краткие характеристики"
//                 placeholder="Введите краткие характеристики"
//               />
//             </Grid.Col>
//           </Grid>
//         </Stack>

//         {/* Модель искусственного интеллекта */}
//         <Stack spacing="sm" mt="md">
//           <Group position="apart">
//             <Switch
//               label="Используется API"
//               checked={useAPI}
//               onChange={(event) => setUseAPI(event.currentTarget.checked)}
//             />
//           </Group>

//           <Grid>
//             <Grid.Col span={6}>
//               <TextInput
//                 label="Наименование модели ИИ"
//                 placeholder="Введите наименование модели ИИ"
//               />
//             </Grid.Col>
//             <Grid.Col span={6}>
//               <TextInput
//                 label="Назначение модели ИИ"
//                 placeholder="Введите назначение модели ИИ"
//               />
//             </Grid.Col>
//             <Grid.Col span={12}>
//               <TextInput
//                 label="Разработчик / поставщик модели ИИ"
//                 placeholder="Введите разработчика / поставщика модели ИИ"
//               />
//             </Grid.Col>
//           </Grid>
//         </Stack>

//         {/* Кнопки */}
//         <Group position="right" mt="md">
//           <Button variant="default" onClick={onClose}>Отменить</Button>
//           <Button onClick={handleSubmit}>Подтвердить</Button>
//         </Group>
//       </Stack>
//     </Modal>
//   );
// };