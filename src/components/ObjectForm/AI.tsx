import { TableData } from '../../UI/tableData/TableData';

interface AIType {
  name: string;
  value: number;
}

const AI: React.FC = () => {
  const columns: (keyof AIType)[] = ['name', 'value'];
  const data: AIType[] = [
    { name: 'AI 1', value: 100 },
    { name: 'AI 2', value: 200 },
  ];

  return <TableData columns={columns} data={data} />;
};

export default AI;
