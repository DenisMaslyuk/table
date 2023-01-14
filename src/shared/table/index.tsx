import { EditIcon, TrashIcon } from "./icons";
import {
  ActionContainer,
  EditButton,
  StyledTable,
  StyledTitle,
  TBody,
  Td,
  Th,
  THead,
  Tr,
  TrashButton,
} from "./styled";

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
      <StyledTitle>
        <div>
          <h2>{title}</h2>
          <h3>table</h3>
        </div>
      </StyledTitle>
      <StyledTable>
        <THead>
          <Tr>
            <Th>
              <input type="checkbox" />
            </Th>
            {keys.map((key) => (
              <Th>{key}</Th>
            ))}
            <Th style={{ textAlign: "center" }}>Action</Th>
          </Tr>
        </THead>
        <TBody>
          {data.map((row, id) => (
            <Tr key={id}>
              <Td>
                <input type="checkbox" />
              </Td>
              {Object.values(row).map((value) => (
                <Td>{value}</Td>
              ))}
              <Td>
                <ActionContainer>
                  <EditButton>
                    <EditIcon />
                  </EditButton>
                  <TrashButton>
                    <TrashIcon />
                  </TrashButton>
                </ActionContainer>
              </Td>
            </Tr>
          ))}
        </TBody>
      </StyledTable>
    </div>
  );
}
export default Table;
