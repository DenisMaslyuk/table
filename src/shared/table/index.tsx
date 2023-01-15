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
  onDeleteHandler: (id: number) => void;
};

function Table({ data, title, onDeleteHandler }: TablePropsType) {
  if (data.length < 0) {
    <h3>No data</h3>;
  }
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
                  <TrashButton
                    type="button"
                    onClick={() => onDeleteHandler(id)}
                  >
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
