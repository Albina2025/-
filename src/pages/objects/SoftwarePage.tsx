import { useState } from 'react';
import { TableData } from '../../layout/tableData/TableData';
import { SoftwareAddModal } from '../../features/object/software/SoftwareAddModal';
import { SoftwareFilterModal } from '../../features/object/software/SoftwareFilterModal';


interface SoftwareType {
  action: string;
  subject: string;
  name: string;
  purpose: string;
  manufacturer: string;
  supplier: string;
  purchaseDate: string;
  purchaseAmount: number;
  currency: string;
  version: string;
  lastUpdateDate: string;
  licenseType: string;
  licenseEndDate: string;
  licenseCount: number;
}

const SoftwarePage: React.FC = () => {
  const [openedAdd, setOpenedAdd] = useState(false);
  const [openedFilter, setOpenedFilter] = useState(false);
//   const [data, setData] = useState<SoftwareType[]>([]);

 const columns: { key: keyof SoftwareType; label: string }[] = [
  { key: 'action', label: 'Действия' },
  { key: 'subject', label: 'Субъект' },
  { key: 'name', label: 'Название ПО' },
  { key: 'purpose', label: 'Назначение ПО' },
  { key: 'manufacturer', label: 'Производитель ПО' },
  { key: 'supplier', label: 'Поставщик' },
  { key: 'purchaseDate', label: 'Дата приобретения' },
  { key: 'purchaseAmount', label: 'Сумма приобретения' },
  { key: 'currency', label: 'Валюта' },
  { key: 'version', label: 'Версия' },
  { key: 'lastUpdateDate', label: 'Дата обновления' },
  { key: 'licenseType', label: 'Тип лицензии' },
  { key: 'licenseEndDate', label: 'Окончание лицензии' },
  { key: 'licenseCount', label: 'Количество лицензий' },
];


const data: SoftwareType[] = [ 
    { action: 'Create', 
        subject: 'Private', 
        name: 'Software 1', 
        purpose: 'Management', 
        manufacturer: 'Company A', 
        supplier: 'Supplier A', 
        purchaseDate: '2024-01-01', 
        purchaseAmount: 1000, 
        currency: 'USD', 
        version: '1.0', 
        lastUpdateDate: '2024-06-01', 
        licenseType: 'Annual', 
        licenseEndDate: '2025-01-01', 
        licenseCount: 10, 
    }, 
    
];


  return (
    <>
      <TableData
        columns={columns}
        data={data}
        onAdd={() => setOpenedAdd(true)}
        onFilter={() => setOpenedFilter(true)}
      />

      <SoftwareAddModal
        opened={openedAdd}
        onClose={() => setOpenedAdd(false)}
        // onSubmit={handleAdd}
      />

      <SoftwareFilterModal
        opened={openedFilter}
        onClose={() => setOpenedFilter(false)}
      />
    </>
  );
};

export default SoftwarePage;