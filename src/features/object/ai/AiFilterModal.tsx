// import {  Group,  Stack } from '@mantine/core';
// import { useState } from 'react';
// import { FloatingSelect } from '../../../UI/input/FloatingSelect';
// import { BaseModal } from '../../../UI/modal/BaseModal';
// import { BaseButton } from '../../../UI/button/BaseButton';


// interface AIFilterModalProps {
//   opened: boolean;
//   onClose: () => void;
// }

// export const AiFilterModal: React.FC<AIFilterModalProps> = ({ opened, onClose }) => {
//   const [subject, setSubject] = useState<string | null>(null);
//   const [platform, setPlatform] = useState<string | null>(null);

//   const handleReset = () => {
//     setSubject(null);
//     setPlatform(null);
//   };

//   const handleApply = () => {
//     console.log('Selected Subject:', subject);
//     console.log('Selected Platform:', platform);
//     onClose(); 
//   };

//   return (
//     <BaseModal
//         opened={opened} 
//         onClose={onClose} 
//         radius={15}
//         withCloseButton={false}   
//         centered
//         size="lg"
//     >
//       <Stack gap="xs">
//         <FloatingSelect
//             labelText="Выберите субъект"
//             radius={10}
//             value={subject}
//             onChange={setSubject}
//             data={[
//                 { value: 'private', label: 'Private Sector' },
//                 { value: 'public', label: 'Public Sector' },
//             ]}
//         />

//         <FloatingSelect
//             labelText="Тип вычислительной платформы"
//             radius={10}
//             value={platform}
//             onChange={setPlatform}
//             data={[
//                 { value: 'ai', label: 'AI' },
//                 { value: 'software', label: 'Software' },
//             ]}
//         />

//         <Group mt="md" grow>
//             <BaseButton
//                 onClick={handleReset}
//                 fullWidth
//                 variantType="primary"
//             >
//                 Сбросить
//             </BaseButton>

//             <BaseButton
//                 onClick={handleApply}
//                 fullWidth
//                 variantType="primary"
//             >
//                 Применить фильтры
//             </BaseButton>
//         </Group>
//       </Stack>
//     </BaseModal>
//   );
// };

import { Grid, Divider } from '@mantine/core'
import { useForm } from '@mantine/form'
import { BaseModal } from '../../../UI/modal/BaseModal'
import { BaseButton } from '../../../UI/button/BaseButton'
import { FloatingSelect } from '../../../UI/input/FloatingSelect'
import type { AiFilterType } from '../../../models/ai'

type Props = {
  opened: boolean
  onClose: () => void
  onApply: (values: AiFilterType) => void
}

export const AiFilterModal = ({
  opened,
  onClose,
  onApply,
}: Props) => {

  const form = useForm<AiFilterType>({
    initialValues: {
      subjectId: null,
      platformType: null,
    },
  })

  const handleReset = () => {
    form.reset()
    onClose()
  }

  const handleApply = () => {
    onApply(form.values)
    onClose()
  }

  return (
    <BaseModal
      opened={opened}
      onClose={onClose}
      radius={15}
      withCloseButton={false}
      centered
      size="lg"
    >
      <Grid>
        <Grid.Col span={12}>
          <Divider size="sm" my="xs" label="Фильтр AI систем" />
        </Grid.Col>

        {/* 1. Субъект */}
        <Grid.Col span={12}>
          <FloatingSelect
            labelText="Выберите субъект"
            radius={10}
            data={[
              { value: '1', label: 'Минфин' },
              { value: '2', label: 'Минздрав' },
            ]}
            {...form.getInputProps('subjectId')}
          />
        </Grid.Col>

        {/* 2. Тип платформы */}
        <Grid.Col span={12}>
          <FloatingSelect
            labelText="Тип вычислительной платформы"
            radius={10}
            data={[
              { value: 'AI', label: 'AI' },
              { value: 'SOFTWARE', label: 'Software' },
            ]}
            {...form.getInputProps('platformType')}
          />
        </Grid.Col>

        {/* Кнопкалар */}
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
            Применить фильтры
          </BaseButton>
        </Grid.Col>
      </Grid>
    </BaseModal>
  )
}