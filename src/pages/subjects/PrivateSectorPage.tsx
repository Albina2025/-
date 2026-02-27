import { useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { TableData } from '../../layout/tableData/TableData'
import { PrivateSectorAddModal } from '../../features/subject/privateSector/PrivateSectorAddModal'
import { PrivateSectorFilterModal } from '../../features/subject/privateSector/PrivateSectorFilterModal'
import type { RootState } from '../../store'
import type {
  PrivateSectorType,
  PrivateSectorFilterType,
} from '../../types/dataTypes'

export const PrivateSectorPage: React.FC = () => {
  const [openedAdd, setOpenedAdd] = useState(false)
  const [openedFilter, setOpenedFilter] = useState(false)
  const { t } = useTranslation()


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
      { key: 'subject', label: t('privateSectorModal.fields.name') },
      { key: 'name', label: t('privateSectorModal.fields.parent') },
      { key: 'purpose', label: t('privateSectorModal.fields.address') },
      { key: 'status', label: t('privateSectorModal.fields.status') },
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