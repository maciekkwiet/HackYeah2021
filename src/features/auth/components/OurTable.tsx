import { ReactNode } from 'react';
import { Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';

export type OurTableProps = {
  columns: string[];
  rows: ReactNode[][];
};

export const OurTable = ({ columns, rows }: OurTableProps) => {
  return (
    <Table width="100%" variant="simple">
      <Thead bg="gray.200">
        <Tr>
          {columns.map((header) => (
            <Th>{header}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row) => (
          <Tr>
            {row.map((node) => (
              <Td>{node}</Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
