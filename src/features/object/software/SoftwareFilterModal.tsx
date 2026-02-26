// import {  Group, Stack } from '@mantine/core';
// import { useState } from 'react';
// import { FloatingSelect } from '../../../UI/input/FloatingSelect';
// import { BaseModal } from '../../../UI/modal/BaseModal';
// import { BaseButton } from '../../../UI/button/BaseButton';

// interface SoftwareFilterModalProps {
//   opened: boolean;
//   onClose: () => void;
// }

// export const SoftwareFilterModal: React.FC<SoftwareFilterModalProps> = ({ opened, onClose }) => {
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
//         size="lg" 
//         radius={15}
//         centered
//         withCloseButton={false}
//     >
//       <Stack >
//         <FloatingSelect
//           labelText="Субъект"
//           placeholder="Субъект"
//           value={subject}
//           onChange={setSubject}
//           data={[
//             { value: 'private', label: 'Private Sector' },
//             { value: 'public', label: 'Public Sector' },
//           ]}
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


import { Grid} from '@mantine/core'
import { useForm } from '@mantine/form'
import { FloatingSelect } from '../../../UI/input/FloatingSelect'
import { BaseModal } from '../../../UI/modal/BaseModal'
import { BaseButton } from '../../../UI/button/BaseButton'
import type { SoftwareFilterType } from '../../../models/software'

type Props = {
  opened: boolean
  onClose: () => void
  onApply: (values: SoftwareFilterType) => void
}

export const SoftwareFilterModal = ({
  opened,
  onClose,
  onApply,
}: Props) => {

  const form = useForm<SoftwareFilterType>({
    initialValues: {
      subjectId: null,
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
      size="lg"
      radius={15}
      centered
      withCloseButton={false}
    >
      <Grid>
        {/* <Grid.Col span={12}>
          <Divider size="sm" my="xs" label="Фильтр программного обеспечения" />
        </Grid.Col> */}

        <Grid.Col span={12}>
          <FloatingSelect
            labelText="Субъект"
            radius={10}
            data={[
              { value: '1', label: 'Минфин' },
              { value: '2', label: 'Минздрав' },
            ]}
            {...form.getInputProps('subjectId')}
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
            Применить фильтры
          </BaseButton>
        </Grid.Col>
      </Grid>
    </BaseModal>
  )
}