// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { TableData } from '../../layout/tableData/TableData';
// import { SoftwareAddModal } from '../../features/object/software/SoftwareAddModal';
// import { SoftwareFilterModal } from '../../features/object/software/SoftwareFilterModal';
// import type { RootState } from '../../store/index';
// import type{ SoftwareType } from '../../types/dataTypes';

// export const SoftwarePage: React.FC = () => {
//   const [openedAdd, setOpenedAdd] = useState(false);
//   const [openedFilter, setOpenedFilter] = useState(false);

 
//   const allItems = useSelector((state: RootState) => state.data.items);


//   const softwareData: SoftwareType[] = allItems
//     .filter((item) => item.type === 'software')
//     .map((item) => item.data as SoftwareType);

//   const columns: { 
//         key: keyof SoftwareType | 'action'; 
//         label: string 
//     }[] = [
//     { key: 'action', label: 'Действия' },
//     { key: 'subject', label: 'Субъект' },
//     { key: 'name', label: 'Название ПО' },
//     { key: 'purpose', label: 'Назначение ПО' },
//     { key: 'manufacturer', label: 'Производитель ПО' },
//     { key: 'supplier', label: 'Поставщик программного обеспечения' },
//     { key: 'purchaseDate', label: 'Дата приобретения' },
//     { key: 'purchaseAmount', label: 'Сумма приобретения' },
//     { key: 'currency', label: 'Валюта суммы' },
//     { key: 'lastUpdateDate', label: 'Дата последнего обновления ПО' },
//     { key: 'licenseEndDate', label: 'Дата окончания срока действия лицензии' },
//     { key: 'version', label: 'Версия' },
//     { key: 'licenseType', label: 'Тип лицензии ПО' },
//     { key: 'licenseCount', label: 'Количество лицензий ПО' },
//   ];

//   return (
//     <>
//       <TableData
//         columns={columns}
//         data={softwareData}
//         onAdd={() => setOpenedAdd(true)}
//         onFilter={() => setOpenedFilter(true)}
//       />

//       <SoftwareAddModal
//         opened={openedAdd}
//         onClose={() => setOpenedAdd(false)}
//       />

//       <SoftwareFilterModal
//         opened={openedFilter}
//         onClose={() => setOpenedFilter(false)}
//       />
//     </>
//   );
// };

import { useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { TableData } from '../../layout/tableData/TableData'
import { SoftwareAddModal } from '../../features/object/software/SoftwareAddModal'
import { SoftwareFilterModal } from '../../features/object/software/SoftwareFilterModal'
import type { RootState } from '../../store'
import type { SoftwareType } from '../../types/dataTypes'
import type { SoftwareFilterType } from '../../models/software'

export const SoftwarePage: React.FC = () => {
  const [openedAdd, setOpenedAdd] = useState(false)
  const [openedFilter, setOpenedFilter] = useState(false)

  // 🔥 Filter state
  const [filter, setFilter] = useState<SoftwareFilterType>({
    subjectId: null,
  })

  const handleApplyFilter = (values: SoftwareFilterType) => {
    setFilter(values)
  }

  const allItems = useSelector((state: RootState) => state.data.items)

  // 🔥 Software гана + filter
  const softwareData: SoftwareType[] = useMemo(() => {
    const onlySoftware = allItems
      .filter((item) => item.type === 'software')
      .map((item) => item.data as SoftwareType)

    return onlySoftware.filter((item) => {
      const subjectMatch =
        !filter.subjectId || item.subject === filter.subjectId

      return subjectMatch
    })
  }, [allItems, filter])

  const columns: { key: keyof SoftwareType | 'action'; label: string }[] = [
    { key: 'action', label: 'Действия' },
    { key: 'subject', label: 'Субъект' },
    { key: 'name', label: 'Название ПО' },
    { key: 'purpose', label: 'Назначение ПО' },
    { key: 'manufacturer', label: 'Производитель ПО' },
    { key: 'supplier', label: 'Поставщик программного обеспечения' },
    { key: 'purchaseDate', label: 'Дата приобретения' },
    { key: 'purchaseAmount', label: 'Сумма приобретения' },
    { key: 'currency', label: 'Валюта суммы' },
    { key: 'lastUpdateDate', label: 'Дата последнего обновления ПО' },
    { key: 'licenseEndDate', label: 'Дата окончания срока действия лицензии' },
    { key: 'version', label: 'Версия' },
    { key: 'licenseType', label: 'Тип лицензии ПО' },
    { key: 'licenseCount', label: 'Количество лицензий ПО' },
  ]

  return (
    <>
      <TableData
        columns={columns}
        data={softwareData}
        onAdd={() => setOpenedAdd(true)}
        onFilter={() => setOpenedFilter(true)}
      />

      <SoftwareAddModal
        opened={openedAdd}
        onClose={() => setOpenedAdd(false)}
      />

      <SoftwareFilterModal
        opened={openedFilter}
        onClose={() => setOpenedFilter(false)}
        onApply={handleApplyFilter}
      />
    </>
  )
}