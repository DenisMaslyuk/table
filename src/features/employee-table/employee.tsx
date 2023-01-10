import { Table, TBody, Td, Th, THead, Tr } from "./styled";

function Employee() {
  return (
    <Table>
      <THead>
        <Tr>
          <Th>1</Th>
          <Th>2</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>3</Td>
          <Td>4</Td>
        </Tr>
      </TBody>
    </Table>
  );
}
export default Employee;
