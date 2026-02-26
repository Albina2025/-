// import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { TableData } from '../../layout/tableData/TableData';
// import { PrivateSectorAddModal } from '../../features/subject/privateSector/PrivateSectorAddModal';
// import { PrivateSectorFilterModal } from '../../features/subject/privateSector/PrivateSectorFilterModal';
// import type { RootState } from '../../store/index';
// import type{ BaseItem } from '../../types/dataTypes';

// interface PrivateSectorType {
//   action: string;
//   subject: string;
//   name: string;
//   purpose: string;
//   status: string;
// }

// export const PrivateSectorPage: React.FC = () => {
//   const [openedAdd, setOpenedAdd] = useState(false);
//   const [openedFilter, setOpenedFilter] = useState(false);

 
//   const allItems = useSelector((state: RootState) => state.data.items);

//   const privateData: PrivateSectorType[] = allItems
//     .filter((item: BaseItem) => item.type === 'privateSector')
//     .map((item) => item.data as PrivateSectorType);

//   const columns: { key: keyof PrivateSectorType; label: string }[] = [
//     { key: 'subject', label: 'Наименование' },
//     { key: 'name', label: 'Вышестоящий' },
//     { key: 'purpose', label: 'Адрес' },
//     { key: 'status', label: 'Статус' },
//     { key: 'action', label: 'Действия' },
//   ];

//   return (
//     <>
//       <TableData
//         columns={columns}
//         data={privateData}
//         onAdd={() => setOpenedAdd(true)}
//         onFilter={() => setOpenedFilter(true)}
//       />

//       <PrivateSectorAddModal
//         opened={openedAdd}
//         onClose={() => setOpenedAdd(false)}
//       />

//       <PrivateSectorFilterModal
//         opened={openedFilter}
//         onClose={() => setOpenedFilter(false)}
//       />
//     </>
//   );
// };

import { useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { TableData } from '../../layout/tableData/TableData'
import { PrivateSectorAddModal } from '../../features/subject/privateSector/PrivateSectorAddModal'
import { PrivateSectorFilterModal } from '../../features/subject/privateSector/PrivateSectorFilterModal'
import type { RootState } from '../../store'
import type {
  PrivateSectorType,
  PrivateSectorFilterType,
} from '../../models/privateSector'

export const PrivateSectorPage: React.FC = () => {
  const [openedAdd, setOpenedAdd] = useState(false)
  const [openedFilter, setOpenedFilter] = useState(false)

  const [filter, setFilter] =
    useState<PrivateSectorFilterType | null>(null)

  const allItems = useSelector(
    (state: RootState) => state.data.items
  )

  const privateData = useMemo(() => {
    return allItems
      .filter((item) => item.type === 'privateSector')
      .map((item) => item.data as PrivateSectorType)
      .filter((item) => {
        if (!filter) return true

        if (
          filter.name &&
          !item.subject
            ?.toLowerCase()
            .includes(filter.name.toLowerCase())
        ) {
          return false
        }

        if (
          filter.address &&
          !item.purpose
            ?.toLowerCase()
            .includes(filter.address.toLowerCase())
        ) {
          return false
        }

        return true
      })
  }, [allItems, filter])

  const columns: { key: keyof PrivateSectorType; label: string }[] =
    [
      { key: 'subject', label: 'Наименование' },
      { key: 'name', label: 'Вышестоящий' },
      { key: 'purpose', label: 'Адрес' },
      { key: 'status', label: 'Статус' },
    ]

  return (
    <>
      <TableData
        columns={columns}
        data={privateData}
        onAdd={() => setOpenedAdd(true)}
        onFilter={() => setOpenedFilter(true)}
      />

      <PrivateSectorAddModal
        opened={openedAdd}
        onClose={() => setOpenedAdd(false)}
      />

      <PrivateSectorFilterModal
        opened={openedFilter}
        onClose={() => setOpenedFilter(false)}
        onApply={(values) => setFilter(values)}
      />
    </>
  )
}