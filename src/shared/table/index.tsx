import { useState } from "react";
import { EditIcon, TrashIcon } from "./icons";
import Row, { RowType } from "./row";
import {
  ActionContainer,
  EditButton,
  StyledCheckbox,
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
  onSaveHandler: (id: number, row: RowType) => void;
};

function Table({
  data,
  title,
  onDeleteHandler,
  onSaveHandler,
}: TablePropsType) {
  if (data.length <= 0) {
    <h3>No data</h3>;
  }
  const keys = Object.keys(data[0]);
  const [selectAll, setSelectAll] = useState(false);

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
              <StyledCheckbox
                type="checkbox"
                onChange={() => setSelectAll(!selectAll)}
              />
            </Th>
            {keys.map((key) => (
              <Th>{key}</Th>
            ))}
            <Th style={{ textAlign: "center" }}>Action</Th>
          </Tr>
        </THead>
        <TBody>
          {data.map((row, id) => {
            return (
              <Row
                id={id}
                data={row}
                onDeleteHandler={onDeleteHandler}
                onSaveHandler={onSaveHandler}
                selectAll={selectAll}
              />
            );
          })}
        </TBody>
      </StyledTable>
    </div>
  );
}
export default Table;
