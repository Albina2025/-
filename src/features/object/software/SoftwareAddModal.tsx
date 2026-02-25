import {
    Stack,
    Group,
    Box,
    Button,
    Grid,
} from '@mantine/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../store/dataSlice';
import { v4 as uuidv4 } from 'uuid';
import { FloatingInput } from '../../../UI/input/FloatingInput';
import { FloatingSelect } from '../../../UI/input/FloatingSelect';
import { BaseModal } from '../../../UI/modal/BaseModal';

interface SoftwareAddModalProps {
  opened: boolean;
  onClose: () => void;
}

export const SoftwareAddModal: React.FC<SoftwareAddModalProps> = ({
  opened,
  onClose,
}) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    subject: '',
    name: '',
    purpose: '',
    manufacturer: '',
    supplier: '',
    purchaseDate: '',
    purchaseAmount: '',
    currency: '',
    version: '',
    lastUpdateDate: '',
    licenseType: '',
    licenseEndDate: '',
    licenseCount: '',
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
        id: uuidv4(),
        type: 'software',
        data: {
          action: 'Create',
          subject: form.subject,
          name: form.name,
          purpose: form.purpose,
          manufacturer: form.manufacturer,
          supplier: form.supplier,
          purchaseDate: form.purchaseDate,
          purchaseAmount: Number(form.purchaseAmount),
          currency: form.currency,
          version: form.version,
          lastUpdateDate: form.lastUpdateDate,
          licenseType: form.licenseType,
          licenseEndDate: form.licenseEndDate,
          licenseCount: Number(form.licenseCount),
        },
      })
    );


    setForm({
      subject: '',
      name: '',
      purpose: '',
      manufacturer: '',
      supplier: '',
      purchaseDate: '',
      purchaseAmount: '',
      currency: '',
      version: '',
      lastUpdateDate: '',
      licenseType: '',
      licenseEndDate: '',
      licenseCount: '',
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
          <Group justify="center">
            <h2>Добавление ПО</h2>
          </Group>

          <Grid>
            <Grid.Col span={6}>
              <FloatingSelect
                labelText="Субъект"
                value={form.subject}
                onChange={(value) =>
                   handleChange('subject', value || '')
                }
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <FloatingInput
                labelText="Название ПО"
                value={form.name}
                onChange={(e) =>
                  handleChange('name', e.currentTarget.value)
                }
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <FloatingInput
                labelText="Назначение ПО"
                value={form.purpose}
                onChange={(e) =>
                  handleChange('purpose', e.currentTarget.value)
                }
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <FloatingInput
                labelText="Производитель ПО"
                value={form.manufacturer}
                onChange={(e) =>
                  handleChange('manufacturer', e.currentTarget.value)
                }
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <FloatingInput
                labelText="Поставщик программного обеспечения"
                value={form.supplier}
                onChange={(e) =>
                  handleChange('supplier', e.currentTarget.value)
                }
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <FloatingInput
                type="date"
                labelText="Дата приобретения"
                value={form.purchaseDate}
                onChange={(e) =>
                  handleChange('purchaseDate', e.currentTarget.value)
                }
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <FloatingInput
                type="number"
                labelText="Сумма приобретения"
                value={form.purchaseAmount}
                onChange={(e) =>
                  handleChange('purchaseAmount', e.currentTarget.value)
                }
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <FloatingSelect
                labelText="Валюта суммы"
                value={form.currency}
                onChange={(value) =>
                  handleChange('currency', value || '')
                }
                data={[
                  { value: 'сом', label: 'Сом' },
                  { value: 'евро', label: 'Евро' },
                  { value: 'доллар', label: 'Доллар' },
                ]}
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <FloatingInput
                type="date"
                labelText="Дата последнего обновления ПО"
                value={form.lastUpdateDate}
                onChange={(e) =>
                  handleChange('lastUpdateDate', e.currentTarget.value)
                }
              />
            </Grid.Col>


            <Grid.Col span={6}>
              <FloatingInput
                type="date"
                labelText="Дата окончания срока действия лицензии"
                value={form.licenseEndDate}
                onChange={(e) =>
                  handleChange('licenseEndDate', e.currentTarget.value)
                }
              />
            </Grid.Col>

            
            <Grid.Col span={6}>
              <FloatingInput
                labelText="Версия ПО"
                value={form.version}
                onChange={(e) =>
                  handleChange('version', e.currentTarget.value)
                }
              />
            </Grid.Col>

            
           <Grid.Col span={6}>
              <FloatingSelect
                labelText="Тип лицензии"
                value={form.licenseType}
                onChange={(value) =>
                  handleChange('licenseType', value || '')
                }
                data={[
                  { value: 'commercial', label: 'Коммерческая' },
                  { value: 'open', label: 'Open Source' },
                  { value: 'trial', label: 'Триал' },
                ]}
              />
            </Grid.Col>


            <Grid.Col span={12}>
              <FloatingInput
                type="number"
                labelText="Количество лицензий ПО"
                value={form.licenseCount}
                onChange={(e) =>
                  handleChange('licenseCount', e.currentTarget.value)
                }
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
