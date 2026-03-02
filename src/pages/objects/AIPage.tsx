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

// import { useState, useEffect, useCallback } from "react";
// import { TableData } from "../../layout/tableData/TableData";
// import { AiAddModal } from "../../features/object/ai/AiAddModal";
// import { AiFilterModal } from "../../features/object/ai/AiFilterModal";
// import { selectAi } from "../../services/ai.service";
// import type { AiSelectRequest, AiItem } from "../../types/ai.types";
// import type { AiFilterType } from "../../types/dataTypes";

// export const AIPage: React.FC = () => {
//   const [openedAdd, setOpenedAdd] = useState(false);
//   const [openedFilter, setOpenedFilter] = useState(false);

//   const [data, setData] = useState<AiItem[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   // 🔹 pagination state
//   const [page, setPage] = useState(0);
//   const [limit, setLimit] = useState(10);

//   // 🔹 sorting state
//   const [sortBy, setSortBy] = useState("ID");
//   const [sortDirection, setSortDirection] =
//     useState<"ASC" | "DESC">("ASC");

//   // 🔹 filter state
//   const [filter, setFilter] = useState<AiFilterType>({
//     subjectId: null,
//     platformType: null,
//   });

//   // ✅ FETCH FUNCTION
//   const fetchData = useCallback(async () => {
//     setLoading(true);
//     setError(null);

//     const request: AiSelectRequest = {
//       pageRequest: {
//         page,
//         limit,
//       },
//       sorting: {
//         sortBy,
//         sortDirection,
//       },
//       filter: {
//         ministryId: filter.subjectId
//           ? Number(filter.subjectId)
//           : null,
//         computePlatformTypeId: filter.platformType
//           ? Number(filter.platformType)
//           : null,
//       },
//     };

//     try {
//       const res = await selectAi(request);
//       setData(res.data.content);
//     } catch (err) {
//       setError("Failed to load data");
//       console.error("Fetch AI error:", err);
//     } finally {
//       setLoading(false);
//     }
//   }, [page, limit, sortBy, sortDirection, filter]);

//   // 🔄 auto reload
//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   const columns: { key: keyof AiItem | "action"; label: string }[] = [
//     { key: "action", label: "Action" },
//     { key: "id", label: "ID" },
//     { key: "titleKg", label: "Title KG" },
//     { key: "titleRu", label: "Title RU" },
//   ];

//   return (
//     <>
//       <TableData
//         columns={columns}
//         data={data}
//         loading={loading}
//         error={error}
//         page={page}
//         limit={limit}
//         total={data.length}
//         onPageChange={setPage}
//         onLimitChange={(value) => {
//           setLimit(value);
//           setPage(0);
//         }}
//         onAdd={() => setOpenedAdd(true)}
//         onFilter={() => setOpenedFilter(true)}
//       />

//       <AiAddModal
//         opened={openedAdd}
//         onClose={() => {
//           setOpenedAdd(false);
//           fetchData();
//         }}
//       />

//       <AiFilterModal
//         opened={openedFilter}
//         onClose={() => setOpenedFilter(false)}
//         onApply={(values) => {
//           setFilter(values);
//           setPage(0);
//         }}
//       />
//     </>
//   );
// };