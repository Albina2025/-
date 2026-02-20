// import { Table, Button } from '@mantine/core';
// import { useState } from 'react';
// import { ModalForm } from '../../UI/modalForm/ModalForm';

// interface TableDataProps<T> {
//   columns: (keyof T)[];
//   data: T[];
// }

// export function TableData<T extends Record<string, any>>({ columns, data }: TableDataProps<T>) {
//   const [opened, setOpened] = useState(false);

//   return (
//     <>
//       <Button mb="sm" onClick={() => setOpened(true)}>
//         Add / Filter
//       </Button>

//       <Table highlightOnHover>
//         <thead>
//           <tr>
//             {columns.map((col) => (
//               <th key={String(col)}>{col}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, i) => (
//             <tr key={i}>
//               {columns.map((col) => (
//                 <td key={String(col)}>{row[col as keyof typeof row]}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       <ModalForm opened={opened} onClose={() => setOpened(false)} />
//     </>
//   );
// }


import { Table, Button, Group } from '@mantine/core';
import { useState } from 'react';
import { FilterModal } from '../modalForm/FilterModal';
import { ModalForm } from '../../UI/modalForm/ModalForm';

interface TableDataProps<T> {
  columns: (keyof T)[];
  data: T[];
}

export function TableData<T extends Record<string, any>>({ columns, data }: TableDataProps<T>) {
  const [openedAdd, setOpenedAdd] = useState(false);
  const [openedFilter, setOpenedFilter] = useState(false);

  return (
    <>
      <Group mb="sm" spacing="sm">
        <Button onClick={() => setOpenedAdd(true)}>Add</Button>
        <Button onClick={() => setOpenedFilter(true)}>Filter</Button>
      </Group>

      <Table highlightOnHover>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={String(col)}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={String(col)}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Add Modal */}
      <ModalForm opened={openedAdd} onClose={() => setOpenedAdd(false)} />

      {/* Filter Modal */}
      <FilterModal opened={openedFilter} onClose={() => setOpenedFilter(false)} />
    </>
  );
}