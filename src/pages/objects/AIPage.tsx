import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { TableData } from '../../layout/tableData/TableData';
import { AiAddModal } from '../../features/object/ai/AiAddModal';
import { AiFilterModal } from '../../features/object/ai/AiFilterModal';
import type { RootState } from '../../store';
import type { AIType } from '../../types/dataTypes';
import type { AiFilterType } from '../../types/dataTypes';

export const AIPage: React.FC = () => {
  const [openedAdd, setOpenedAdd] = useState(false);
  const [openedFilter, setOpenedFilter] = useState(false);
  const { t } = useTranslation();

  const [filter, setFilter] = useState<AiFilterType>({
    subjectId: null,
    platformType: null,
  });

  const handleApplyFilter = (values: AiFilterType) => {
    setFilter(values);
  };

  const allItems = useSelector((state: RootState) => state.data.items);

  const aiData: AIType[] = useMemo(() => {
    const onlyAi = allItems
      .filter((item) => item.type === 'ai')
      .map((item) => item.data as AIType);

    return onlyAi.filter((item) => {
      const subjectMatch =
        !filter.subjectId || item.subject === filter.subjectId;

      const platformMatch =
        !filter.platformType || item.platformType === filter.platformType;

      return subjectMatch && platformMatch;
    });
  }, [allItems, filter]);

   const columns: { key: keyof AIType | 'action'; label: string }[] = [
    { key: 'action', label: t('object.ai.action') },
    { key: 'apiUsage', label: t('object.ai.apiUsage') },
    { key: 'subject', label: t('object.ai.subject') },
    { key: 'platformType', label: t('object.ai.platformType') },
    { key: 'equipmentName', label: t('object.ai.equipmentName') },
    { key: 'equipmentPurpose', label: t('object.ai.equipmentPurpose') },
    { key: 'ownerDepartment', label: t('object.ai.ownerDepartment') },
    { key: 'equipmentSupplier', label: t('object.ai.equipmentSupplier') },
    { key: 'purchaseDate', label: t('object.ai.purchaseDate') },
    { key: 'purchaseAmount', label: t('object.ai.purchaseAmount') },
    { key: 'currency', label: t('object.ai.currency') },
    { key: 'shortCharacteristics', label: t('object.ai.shortCharacteristics') },
    { key: 'aiModelName', label: t('object.ai.aiModelName') },
    { key: 'aiModelPurpose', label: t('object.ai.aiModelPurpose') },
    { key: 'aiModelDeveloper', label: t('object.ai.aiModelDeveloper') },
    { key: 'apiProvider', label: t('object.ai.apiProvider') },
  ];

  return (
    <>
      <TableData
        columns={columns}
        data={aiData}
        onAdd={() => setOpenedAdd(true)}
        onFilter={() => setOpenedFilter(true)}
      />

      <AiAddModal
        opened={openedAdd}
        onClose={() => setOpenedAdd(false)}
      />

      <AiFilterModal
        opened={openedFilter}
        onClose={() => setOpenedFilter(false)}
        onApply={handleApplyFilter}
      />
    </>
  );
};