import {
    Stack,
    Group,
    Switch,
    Grid,
    Box,
    Title,
    Divider,
} from '@mantine/core';
import { useState } from 'react';
import { FloatingInput } from '../../../UI/input/FloatingInput';
import { useDispatch } from 'react-redux';
import  {  addItem } from '../../../store/dataSlice';
import { FloatingSelect } from '../../../UI/input/FloatingSelect';
import { IconCheck, IconX } from '@tabler/icons-react';
import { BaseModal } from '../../../UI/modal/BaseModal';
import { BaseButton } from '../../../UI/button/BaseButton';
import { useTranslation } from "react-i18next";


interface AiAddModalProps {
    opened: boolean;
    onClose: () => void;
}

export const AiAddModal: React.FC<AiAddModalProps> = ({
    opened,
    onClose,
}) => {
  const dispatch = useDispatch();
  const [useAPI, setUseAPI] = useState(false);
  const { t } = useTranslation();

  const [form, setForm] = useState({
    subject: '',
    platformType: '',
    equipmentName: '',
    equipmentPurpose: '',
    ownerDepartment: '',
    equipmentSupplier: '',
    purchaseDate: '',
    purchaseAmount: '',
    currency: '',
    shortCharacteristics: '',
    aiModelName: '',
    aiModelPurpose: '',
    aiModelDeveloper: '',
    apiProvider: '',
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
        type: 'ai',
        data: {
          name: form.aiModelName,
          value: 0, 
          action: 'new',
          apiUsage: useAPI,
          subject: form.subject,
          platformType: form.platformType,
          equipmentName: form.equipmentName,
          equipmentPurpose: form.equipmentPurpose,
          ownerDepartment: form.ownerDepartment,
          equipmentSupplier: form.equipmentSupplier,
          purchaseDate: form.purchaseDate,
          purchaseAmount: Number(form.purchaseAmount),
          currency: form.currency,
          shortCharacteristics: form.shortCharacteristics,
          aiModelName: form.aiModelName,
          aiModelPurpose: form.aiModelPurpose,
          aiModelDeveloper: form.aiModelDeveloper,
          apiProvider: useAPI ? form.apiProvider : '',
        },
      })
    );


    setForm({
      subject: '',
      platformType: '',
      equipmentName: '',
      equipmentPurpose: '',
      ownerDepartment: '',
      equipmentSupplier: '',
      purchaseDate: '',
      purchaseAmount: '',
      currency: '',
      shortCharacteristics: '',
      aiModelName: '',
      aiModelPurpose: '',
      aiModelDeveloper: '',
      apiProvider: '',
    });

    setUseAPI(false);
    onClose();
  };

  return (
    <BaseModal
      opened={opened}
      onClose={onClose}
      size={1200} 
      radius={15}
      centered
      withCloseButton={false}
      styles={{
        body: { padding: 24 },
      }}
    >
      <Box
        p="md"
        style={{
            border: '1px solid #303d43',
            borderRadius: 8,
        }}
      >
        <Stack gap="lg">
          <Title order={3} ta="center">
             {t("aiModal.title")}
          </Title>

        <Divider 
            style={{
                border: '1px solid #303d43',
            }}
        />

         
          <Box
            p="md"
            style={{
                border: '1px solid #303d43',
                borderRadius: 8,
            }}
          >
            <Stack gap="md">
              <Title order={5} ta="center">
                {t("aiModal.model")}
              </Title>

              <Grid gutter="xs">
                <Grid.Col span={6}>
                  <FloatingSelect
                    labelText={t("aiModal.fields.subject")}
                    value={form.subject}
                    onChange={(value) =>
                    handleChange('subject', value || '')
                    }
                     data={[
                        { value: 'state', label: 'Мамлекеттик' },
                        { value: 'private', label: 'Жеке' },
                     ]}
                  />
                </Grid.Col>

                <Grid.Col span={6}>
                  <FloatingSelect
                    labelText={t("aiModal.fields.platformType")}
                    value={form.platformType}
                    onChange={(value) =>
                    handleChange('platformType', value || '')
                    }
                      data={[
                        { value: 'server', label: 'Сервер' },
                        { value: 'workstation', label: 'Рабочая станция' },
                      ]}
                  />
                </Grid.Col>

                <Grid.Col span={6}>
                  <FloatingInput
                    labelText={t("aiModal.fields.equipmentName")}
                    value={form.equipmentName}
                    onChange={(e) =>
                      handleChange('equipmentName', e.currentTarget.value)
                    }
                  />
                </Grid.Col>

                <Grid.Col span={6}>
                  <FloatingInput
                    labelText={t("aiModal.fields.equipmentPurpose")}
                    value={form.equipmentPurpose}
                    onChange={(e) =>
                      handleChange('equipmentPurpose', e.currentTarget.value)
                    }
                  />
                </Grid.Col>

                <Grid.Col span={6}>
                  <FloatingInput
                    labelText={t("aiModal.fields.ownerDepartment")}
                    value={form.ownerDepartment}
                    onChange={(e) =>
                      handleChange('ownerDepartment', e.currentTarget.value)
                    }
                  />
                </Grid.Col>

                <Grid.Col span={6}>
                  <FloatingInput
                    labelText={t("aiModal.fields.equipmentSupplier")}
                    value={form.equipmentSupplier}
                    onChange={(e) =>
                      handleChange(
                        'equipmentSupplier',
                        e.currentTarget.value
                      )
                    }
                  />
                </Grid.Col>

                <Grid.Col span={6}>
                  <FloatingInput
                    type="date"
                    labelText={t("aiModal.fields.purchaseDate")}
                    value={form.purchaseDate}
                    onChange={(e) =>
                       handleChange('purchaseDate', e.currentTarget.value)
                    }
                  />
                </Grid.Col>

                <Grid.Col span={6}>
                  <FloatingInput
                    labelText={t("aiModal.fields.purchaseAmount")}
                    type="number"
                    value={form.purchaseAmount}
                    onChange={(e) =>
                      handleChange(
                        'purchaseAmount',
                        e.currentTarget.value
                      )
                    }
                  />
                </Grid.Col>

               <Grid.Col span={6}>
                  <FloatingSelect
                    labelText={t("aiModal.fields.currency")}
                    value={form.currency}
                    onChange={(value) =>
                      handleChange('currency', value || '')
                    }
                    data={[
                      { value: 'сом', label: t("softwareModal.currencyOptions.som") },
                      { value: 'евро', label:  t("softwareModal.currencyOptions.euro") },
                      { value: 'доллар', label:  t("softwareModal.currencyOptions.dollar") },
                    ]}
                  />
                </Grid.Col>

                <Grid.Col span={12}>
                  <FloatingInput
                    labelText={t("aiModal.fields.shortCharacteristics")}
                    value={form.shortCharacteristics}
                    onChange={(e) =>
                      handleChange(
                        'shortCharacteristics',
                        e.currentTarget.value
                      )
                    }
                  />
                </Grid.Col>
              </Grid>
            </Stack>
          </Box>

      
          <Box
            p="md"
            style={{
              border: '1px solid #303d43',
              borderRadius: 8,
            }}
          >
            <Stack gap="md">
              <Title order={5} ta="center">
                 {t("aiModal.model")}
              </Title>

              <Switch
                label={t("aiModal.fields.useAPI")}
                checked={useAPI}
                onChange={(event) =>
                    setUseAPI(event.currentTarget.checked)
                }

                
                color="green"

               
                thumbIcon={
                    useAPI ? (
                    <IconCheck size={12} color="green" />
                    ) : (
                    <IconX size={12} color="red" />
                    )
                }

                styles={{
                    track: {
                    backgroundColor: useAPI ? '#12b886' : '#fa5252', 
                    },
                    thumb: {
                    backgroundColor: 'white',
                    },
                }}
                />

              <Grid gutter="md">
                <Grid.Col span={6}>
                  <FloatingSelect
                    labelText={t("aiModal.fields.aiModelName")}
                    value={form.aiModelName}
                    onChange={(value) =>
                        handleChange('aiModelName', value || '')
                    }
                    data={[
                      { value: 'gpt-3.5', label: 'GPT-3.5' },
                    ]}
                  />
                </Grid.Col>

                <Grid.Col span={6}>
                  <FloatingInput
                    labelText={t("aiModal.fields.aiModelPurpose")}
                    value={form.aiModelPurpose}
                    onChange={(e) =>
                      handleChange(
                        'aiModelPurpose',
                        e.currentTarget.value
                      )
                    }
                  />
                </Grid.Col>

                <Grid.Col span={12}>
                  <FloatingInput
                    labelText={t("aiModal.fields.aiModelDeveloper")}
                    value={form.aiModelDeveloper}
                    onChange={(e) =>
                      handleChange(
                        'aiModelDeveloper',
                        e.currentTarget.value
                      )
                    }
                  />
                </Grid.Col>

                {useAPI && (
                  <Grid.Col span={12}>
                    <FloatingInput
                      labelText={t("aiModal.fields.apiProvider")}
                      value={form.apiProvider}
                      onChange={(e) =>
                        handleChange(
                          'apiProvider',
                          e.currentTarget.value
                        )
                      }
                    />
                  </Grid.Col>
                )}
              </Grid>
            </Stack>
          </Box>

          <Group justify="center" mt="md">
            <BaseButton 
                variantType="secondary" 
                onClick={onClose}
            >
              {t("aiModal.buttons.cancel")}
            </BaseButton>
            <BaseButton 
                variantType='primary' 
                onClick={handleSubmit}
            >
              {t("aiModal.buttons.confirm")}
            </BaseButton>
          </Group>
        </Stack>
      </Box>
    </BaseModal>
  );
};

