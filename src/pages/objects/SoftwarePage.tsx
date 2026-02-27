import { useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { TableData } from '../../layout/tableData/TableData'
import { SoftwareAddModal } from '../../features/object/software/SoftwareAddModal'
import { SoftwareFilterModal } from '../../features/object/software/SoftwareFilterModal'
import type { RootState } from '../../store'
import type { SoftwareType } from '../../types/dataTypes'
import type { SoftwareFilterType } from '../../types/dataTypes'

export const SoftwarePage: React.FC = () => {
  const [openedAdd, setOpenedAdd] = useState(false)
  const [openedFilter, setOpenedFilter] = useState(false)
  const { t } = useTranslation()


  const [filter, setFilter] = useState<SoftwareFilterType>({
    subjectId: null,
  })

  const handleApplyFilter = (values: SoftwareFilterType) => {
    setFilter(values)
  }

  const allItems = useSelector((state: RootState) => state.data.items)


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
    { key: 'action', label: t('object.software.action') },
    { key: 'subject', label: t('object.software.subject') },
    { key: 'name', label: t('object.software.name') },
    { key: 'purpose', label: t('object.software.purpose') },
    { key: 'manufacturer', label: t('object.software.manufacturer') },
    { key: 'supplier', label: t('object.software.supplier') },
    { key: 'purchaseDate', label: t('object.software.purchaseDate') },
    { key: 'purchaseAmount', label: t('object.software.purchaseAmount') },
    { key: 'currency', label: t('object.software.currency') },
    { key: 'lastUpdateDate', label: t('object.software.lastUpdateDate') },
    { key: 'licenseEndDate', label: t('object.software.licenseEndDate') },
    { key: 'version', label: t('object.software.version') },
    { key: 'licenseType', label: t('object.software.licenseType') },
    { key: 'licenseCount', label: t('object.software.licenseCount') },
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