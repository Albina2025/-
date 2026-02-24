import { useState } from 'react';
import { useSelector } from 'react-redux';
import { TableData } from '../../layout/tableData/TableData';
import { AiAddModal } from '../../features/object/ai/AiAddModal';
import { AiFilterModal } from '../../features/object/ai/AiFilterModal';
import type { RootState } from '../../store/index';
import type { AIType } from '../../types/dataTypes';

export const AIPage: React.FC = () => {
  const [openedAdd, setOpenedAdd] = useState(false);
  const [openedFilter, setOpenedFilter] = useState(false);

 
  const allItems = useSelector((state: RootState) => state.data.items);


  const aiData: AIType[] = allItems
    .filter((item) => item.type === 'ai')
    .map((item) => item.data as AIType);

  const columns: { 
        key: keyof AIType | 'action'; 
        label: string 
    }[] = [
    { key: 'action', label: 'Действия' },
    { key: 'apiUsage', label: 'Используется API' },
    { key: 'subject', label: 'Субъект' },
    { key: 'platformType', label: 'Тип вычислительной платформы' },
    { key: 'equipmentName', label: 'Наименование оборудования' },
    { key: 'equipmentPurpose', label: 'Назначение оборудования' },
    { key: 'ownerDepartment', label: 'Ответственное подразделение-владелец' },
    { key: 'equipmentSupplier', label: 'Поставщик оборудования' },
    { key: 'purchaseDate', label: 'Дата приобретения' },
    { key: 'purchaseAmount', label: 'Сумма приобретения' },
    { key: 'currency', label: 'Валюта суммы' },
    { key: 'shortCharacteristics', label: 'Краткие характеристики' },
    { key: 'aiModelName', label: 'Наименование модели ИИ' },
    { key: 'aiModelPurpose', label: 'Назначение модели ИИ' },
    { key: 'aiModelDeveloper', label: 'Разработчик / поставщик модели ИИ' },
    { key: 'apiProvider', label: 'Поставщик API (если используется)' },
  ];
    <AiAddModal
        opened={openedAdd}
        onClose={() => {
            setOpenedAdd(false);
        }}
    />

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
      />
    </>
  );
};

