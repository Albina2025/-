import {
    Stack,
    Group,
    TextInput,
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
        apiUsage: useAPI ? 'Yes' : 'No',
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
            Добавление ИИ
          </Title>

          <Divider />

         
          <Box
            p="md"
            style={{
                border: '1px solid #303d43',
                borderRadius: 8,
            }}
          >
            <Stack gap="md">
              <Title order={5} ta="center">
                Аппаратная платформа (железо)
              </Title>

              <Grid gutter="xs">
                <Grid.Col span={6}>
                  <FloatingSelect
                    labelText="Субъект"
                    value={form.subject}
                    onChange={(value) =>
                    handleChange('licenseType', value || '')
                    }
                  />
                </Grid.Col>

                <Grid.Col span={6}>
                  <FloatingSelect
                    labelText="Тип вычислительной платформы"
                    value={form.platformType}
                    onChange={(value) =>
                    handleChange('licenseType', value || '')
                    }
                  />
                </Grid.Col>

                <Grid.Col span={6}>
                  <FloatingInput
                    labelText="Наименование оборудования"
                    value={form.equipmentName}
                    onChange={(e) =>
                      handleChange('equipmentName', e.currentTarget.value)
                    }
                  />
                </Grid.Col>

                <Grid.Col span={6}>
                  <FloatingInput
                    labelText="Назначение оборудования"
                    value={form.equipmentPurpose}
                    onChange={(e) =>
                      handleChange('equipmentPurpose', e.currentTarget.value)
                    }
                  />
                </Grid.Col>

                <Grid.Col span={6}>
                  <FloatingInput
                    labelText="Ответственное подразделение-владелец"
                    value={form.ownerDepartment}
                    onChange={(e) =>
                      handleChange('ownerDepartment', e.currentTarget.value)
                    }
                  />
                </Grid.Col>

                <Grid.Col span={6}>
                  <FloatingInput
                    labelText="Поставщик оборудования"
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
                  <TextInput
                    type="date"
                    label="Дата приобретения"
                    value={form.purchaseDate}
                    onChange={(e) =>
                      handleChange('purchaseDate', e.currentTarget.value)
                    }
                  />
                </Grid.Col>

                <Grid.Col span={6}>
                  <TextInput
                    label="Сумма приобретения"
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
                    labelText="Валюта суммы"
                    value={form.currency}
                    onChange={(value) =>
                    handleChange('licenseType', value || '')
                    }
                  />
                </Grid.Col>

                <Grid.Col span={12}>
                  <FloatingInput
                    labelText="Краткие характеристики"
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
                Модель искусственного интеллекта
              </Title>

              <Switch
                label="Используется API"
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
                  <TextInput
                    label="Наименование модели ИИ"
                    value={form.aiModelName}
                    onChange={(e) =>
                      handleChange(
                        'aiModelName',
                        e.currentTarget.value
                      )
                    }
                  />
                </Grid.Col>

                <Grid.Col span={6}>
                  <TextInput
                    label="Назначение модели ИИ"
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
                  <TextInput
                    label="Разработчик / поставщик модели ИИ"
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
                    <TextInput
                      label="Поставщик API (если используется)"
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
              Отменить
            </BaseButton>
            <BaseButton 
                variantType='primary' 
                onClick={handleSubmit}
            >
              Подтвердить
            </BaseButton>
          </Group>
        </Stack>
      </Box>
    </BaseModal>
  );
};

