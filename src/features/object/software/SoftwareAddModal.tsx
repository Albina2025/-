import {
    Stack,
    Group,
    Box,
    Grid,
} from '@mantine/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../store/dataSlice';
import { v4 as uuidv4 } from 'uuid';
import { FloatingInput } from '../../../UI/input/FloatingInput';
import { FloatingSelect } from '../../../UI/input/FloatingSelect';
import { BaseModal } from '../../../UI/modal/BaseModal';
import { BaseButton } from '../../../UI/button/BaseButton';
import { useTranslation } from "react-i18next";

interface SoftwareAddModalProps {
  opened: boolean;
  onClose: () => void;
}

export const SoftwareAddModal: React.FC<SoftwareAddModalProps> = ({
  opened,
  onClose,
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

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
            <h2>{t("softwareModal.title")}</h2>
          </Group>
            

          <Grid>
            <Grid.Col span={6}>
              <FloatingSelect
                labelText={t("softwareModal.fields.subject")}
                value={form.subject}
                onChange={(value) =>
                   handleChange('subject', value || '')
                }
                data={[
                  { value: 'state', label: t("softwareModal.subjectOptions.state") },
                  { value: 'private', label: t("softwareModal.subjectOptions.private") },
                ]}
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <FloatingInput
                labelText={t("softwareModal.fields.name")}
                value={form.name}
                onChange={(e) =>
                  handleChange('name', e.currentTarget.value)
                }
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <FloatingInput
                labelText={t("softwareModal.fields.purpose")}
                value={form.purpose}
                onChange={(e) =>
                  handleChange('purpose', e.currentTarget.value)
                }
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <FloatingInput
                labelText={t("softwareModal.fields.manufacturer")}
                value={form.manufacturer}
                onChange={(e) =>
                  handleChange('manufacturer', e.currentTarget.value)
                }
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <FloatingInput
                labelText={t("softwareModal.fields.supplier")}
                value={form.supplier}
                onChange={(e) =>
                  handleChange('supplier', e.currentTarget.value)
                }
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <FloatingInput
                type="date"
                labelText={t("softwareModal.fields.purchaseDate")}
                value={form.purchaseDate}
                onChange={(e) =>
                  handleChange('purchaseDate', e.currentTarget.value)
                }
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <FloatingInput
                type="number"
                labelText={t("softwareModal.fields.purchaseAmount")}
                value={form.purchaseAmount}
                onChange={(e) =>
                  handleChange('purchaseAmount', e.currentTarget.value)
                }
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <FloatingSelect
                labelText={t("softwareModal.fields.currency")}
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

            <Grid.Col span={6}>
              <FloatingInput
                type="date"
                labelText={t("softwareModal.fields.lastUpdateDate")}
                value={form.lastUpdateDate}
                onChange={(e) =>
                  handleChange('lastUpdateDate', e.currentTarget.value)
                }
              />
            </Grid.Col>


            <Grid.Col span={6}>
              <FloatingInput
                type="date"
                labelText={t("softwareModal.fields.licenseEndDate")}
                value={form.licenseEndDate}
                onChange={(e) =>
                  handleChange('licenseEndDate', e.currentTarget.value)
                }
              />
            </Grid.Col>

            
            <Grid.Col span={6}>
              <FloatingInput
                labelText={t("softwareModal.fields.version")}
                value={form.version}
                onChange={(e) =>
                  handleChange('version', e.currentTarget.value)
                }
              />
            </Grid.Col>

            
           <Grid.Col span={6}>
              <FloatingSelect
                labelText={t("softwareModal.fields.licenseType")}
                value={form.licenseType}
                onChange={(value) =>
                  handleChange('licenseType', value || '')
                }
                data={[
                  { value: 'commercial', label: t("softwareModal.licenseOptions.commercial") },
                  { value: 'open', label: t("softwareModal.licenseOptions.open") },
                  { value: 'trial', label: t("softwareModal.licenseOptions.trial") },
                ]}
              />
            </Grid.Col>


            <Grid.Col span={12}>
              <FloatingInput
                type="number"
                labelText={t("softwareModal.fields.licenseCount")}
                value={form.licenseCount}
                onChange={(e) =>
                  handleChange('licenseCount', e.currentTarget.value)
                }
              />
            </Grid.Col>
          </Grid>
        </Box>

        <Group justify="center">
          <BaseButton 
                variantType="secondary" 
                onClick={onClose}>
            {t("softwareModal.buttons.cancel")}
          </BaseButton>
          <BaseButton 
                variantType='primary' 
                onClick={handleSubmit}
          >
             {t("softwareModal.buttons.confirm")}
          </BaseButton>
        </Group>
      </Stack>
    </BaseModal>
  );
};
