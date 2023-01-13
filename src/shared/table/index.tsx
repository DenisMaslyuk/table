import { EmployeeDataType } from "../../features/employees-table/employee-data";
import { StyledTable, TBody, Td, Th, THead, Tr } from "./styled";

export type TablePropsType = {
  title: string;
  data: Array<{
    [key: string]: string;
  }>;
};

function Table({ data, title }: TablePropsType) {
  const keys = Object.keys(data[0]);
  return (
    <div>
      <h2>{title}</h2>
      <StyledTable>
        <THead>
          <Tr>
            <Th>
              <input type="checkbox" />
            </Th>
            {keys.map((key) => (
              <Th>{key}</Th>
            ))}
          </Tr>
        </THead>
        <TBody>
          {data.map((row) => (
            <Tr key={row.name + row.surname}>
              <Td>
                <input type="checkbox" />
              </Td>
              <Td>{row.name}</Td>
              <Td>{row.surname}</Td>
              <Td>{row.date}</Td>
            </Tr>
          ))}
        </TBody>
      </StyledTable>
    </div>
  );
}
export default Table;
