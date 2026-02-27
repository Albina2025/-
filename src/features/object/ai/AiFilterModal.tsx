import { Grid} from '@mantine/core'
import { useForm } from '@mantine/form'
import { BaseModal } from '../../../UI/modal/BaseModal'
import { BaseButton } from '../../../UI/button/BaseButton'
import { FloatingSelect } from '../../../UI/input/FloatingSelect'
import type { AiFilterType } from '../../../types/dataTypes'
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();
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
          <FloatingSelect
            labelText={t("aiFilter.fields.subject")}
            radius={10}
            data={[
              { value: '1', label: 'Минфин' },
              { value: '2', label: 'Минздрав' },
            ]}
            {...form.getInputProps('subjectId')}
          />
        </Grid.Col>

      
        <Grid.Col span={12}>
          <FloatingSelect
            labelText={t("aiFilter.fields.platformType")}
            radius={10}
            data={[
              { value: 'AI', label: 'AI' },
              { value: 'SOFTWARE', label: 'Software' },
            ]}
            {...form.getInputProps('platformType')}
          />
        </Grid.Col>

  
        <Grid.Col span={6}>
          <BaseButton
            onClick={handleReset}
            fullWidth
            variantType="primary"
          >
            {t("aiFilter.buttons.reset")}
          </BaseButton>
        </Grid.Col>

        <Grid.Col span={6}>
          <BaseButton
            onClick={handleApply}
            fullWidth
            variantType="primary"
          >
             {t("aiFilter.buttons.apply")}
          </BaseButton>
        </Grid.Col>
      </Grid>
    </BaseModal>
  )
}