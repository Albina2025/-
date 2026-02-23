import { useState } from 'react';
import { TableData } from '../../layout/tableData/TableData';
import { AiAddModal } from '../../features/object/ai/AiAddModal';
import { AiFilterModal } from '../../features/object/ai/AiFilterModal';

interface AIType {
  name: string;
  value: number;
}

const AIPage: React.FC = () => {
  const [openedAdd, setOpenedAdd] = useState(false);
  const [openedFilter, setOpenedFilter] = useState(false);

  const columns: { key: keyof AIType; label: string }[] = [
    { key: 'name', label: 'Аты' },
    { key: 'value', label: 'Маани' },
    ];

  const data: AIType[] = [
    { name: 'AI 1', value: 100 },
    { name: 'AI 2', value: 200 },
  ];

  return (
    <>
      <TableData
        columns={columns}
        data={data}
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

export default AIPage;