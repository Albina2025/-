// import {  Group, Stack, Switch } from '@mantine/core';
// import { useState } from 'react';
// import { FloatingInput } from '../../../UI/input/FloatingInput';
// import { IconCheck, IconX } from '@tabler/icons-react';
// import { BaseModal } from '../../../UI/modal/BaseModal';
// import { BaseButton } from '../../../UI/button/BaseButton';

// interface PrivateSectorFilterProps {
//   opened: boolean;
//   onClose: () => void;
// }

// export const PrivateSectorFilterModal: React.FC<PrivateSectorFilterProps> = ({
//   opened,
//   onClose,
// }) => {
//   const [name, setName] = useState<string>('');
//   const [address, setAddress] = useState<string>('');
//   const [exclude, setExclude] = useState<string>('');
//   const [useAPI, setUseAPI] = useState(false);
//   const [audited, setAudited] = useState(false);

//   const handleReset = () => {
//     setName('');
//     setAddress('');
//     setExclude('');
//     setUseAPI(false);
//     setAudited(false);
//   };

//   const handleApply = () => {
//     console.log({
//       name,
//       address,
//       exclude,
//       useAPI,
//       audited,
//     });

//     onClose();
//   };

//   return (
//     <BaseModal
//       opened={opened}
//       onClose={onClose}
//       centered
//       size={1000}
//       withCloseButton={false}
//       radius={15}
//     >
//       <Stack gap={8}>

//         <FloatingInput
//           labelText="Наименование"
//           value={name}
//           onChange={(event) =>
//             setName(event.currentTarget.value)
//           }
//           radius={10}
//         />

//         <FloatingInput
//           labelText="Адрес"
//           value={address}
//           onChange={(event) =>
//             setAddress(event.currentTarget.value)
//           }
//           radius={10}
//         />


//         <Switch
//             label="forms.enabled"
//             checked={useAPI}
//             onChange={(event) =>
//                 setUseAPI(event.currentTarget.checked)
//             }
//             color={useAPI ? "green" : "red"}
//             thumbIcon={
//                 useAPI ? (
//                 <IconCheck size={12} color="green" />
//                 ) : (
//                 <IconX size={12} color="red" />
//                 )
//             }
//             styles={{
//                 track: {
//                 backgroundColor: useAPI ? '#12b886' : '#fa5252',
//                 },
//                 thumb: {
//                 backgroundColor: 'white',
//                 },
//             }}
//         />

 
//         <FloatingInput
//           labelText="forms.exclude"
//           value={exclude}
//           onChange={(event) =>
//             setExclude(event.currentTarget.value)
//           }
//           radius={10}
//         />


//         <Switch
//             label="forms.quditeMinistries"
//             checked={audited}
//             onChange={(event) =>
//                 setAudited(event.currentTarget.checked)
//             }
//             color={audited ? "green" : "red"}
//             thumbIcon={
//                 audited ? (
//                 <IconCheck size={12} color="green" />
//                 ) : (
//                 <IconX size={12} color="red" />
//                 )
//             }
//             styles={{
//                 track: {
//                 backgroundColor: audited ? '#12b886' : '#fa5252',
//                 },
//                 thumb: {
//                 backgroundColor: 'white',
//                 },
//             }}
//         />

//         <Group mt="md" grow>
//           <BaseButton 
//                 onClick={handleReset}
//                 fullWidth
//                 variantType="primary"
//           >
//             Сбросить
//           </BaseButton>

//           <BaseButton 
//                 onClick={handleApply}
//                 fullWidth
//                 variantType="primary"
//           >
//             Применить фильтры
//           </BaseButton>
//         </Group>

//       </Stack>
//     </BaseModal>
//   );
// };

import { Grid, Divider, Switch } from '@mantine/core'
import { useForm } from '@mantine/form'
import { BaseModal } from '../../../UI/modal/BaseModal'
import { BaseButton } from '../../../UI/button/BaseButton'
import { FloatingInput } from '../../../UI/input/FloatingInput'
import { IconCheck, IconX } from '@tabler/icons-react'
import type { PrivateSectorFilterType } from '../../../models/privateSector'

interface Props {
  opened: boolean
  onClose: () => void
  onApply: (values: PrivateSectorFilterType | null) => void
}

export const PrivateSectorFilterModal = ({
  opened,
  onClose,
  onApply,
}: Props) => {

  const form = useForm<PrivateSectorFilterType>({
    initialValues: {
      name: null,
      address: null,
      useAPI: false,
      audited: false,
    },
  })

  // 🔥 APPLY
  const handleApply = () => {
    onApply(form.values)
    onClose()
  }

  // 🔥 RESET (ЭҢ МААНИЛҮҮ)
  const handleReset = () => {
    form.reset()

    // parent filter тазалоо
    onApply(null)

    onClose()
  }

  return (
    <BaseModal
      opened={opened}
      onClose={onClose}
      centered
      size={800}
      withCloseButton={false}
      radius={15}
    >
      <Grid>
        <Grid.Col span={12}>
          <Divider size="sm" my="xs" label="Фильтр Private Sector" />
        </Grid.Col>

        <Grid.Col span={12}>
          <FloatingInput
            labelText="Наименование"
            {...form.getInputProps('name')}
          />
        </Grid.Col>

        <Grid.Col span={12}>
          <FloatingInput
            labelText="Адрес"
            {...form.getInputProps('address')}
          />
        </Grid.Col>

        <Grid.Col span={12}>
          <Switch
            label="Используется API"
            checked={form.values.useAPI}
            onChange={(e) =>
              form.setFieldValue('useAPI', e.currentTarget.checked)
            }
            color={form.values.useAPI ? 'green' : 'red'}
            thumbIcon={
              form.values.useAPI ? (
                <IconCheck size={12} />
              ) : (
                <IconX size={12} />
              )
            }
          />
        </Grid.Col>

        <Grid.Col span={12}>
          <Switch
            label="Проверено"
            checked={form.values.audited}
            onChange={(e) =>
              form.setFieldValue('audited', e.currentTarget.checked)
            }
            color={form.values.audited ? 'green' : 'red'}
            thumbIcon={
              form.values.audited ? (
                <IconCheck size={12} />
              ) : (
                <IconX size={12} />
              )
            }
          />
        </Grid.Col>

        <Grid.Col span={6}>
          <BaseButton
            onClick={handleReset}
            fullWidth
            variantType="primary"
          >
            Сбросить
          </BaseButton>
        </Grid.Col>

        <Grid.Col span={6}>
          <BaseButton
            onClick={handleApply}
            fullWidth
            variantType="primary"
          >
            Применить
          </BaseButton>
        </Grid.Col>

      </Grid>
    </BaseModal>
  )
}