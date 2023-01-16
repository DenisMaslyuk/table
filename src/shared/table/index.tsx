import { useState } from "react";
import Row, { RowType } from "./row";
import {
  StyledCheckbox,
  StyledTable,
  StyledTitle,
  TBody,
  Th,
  THead,
  Tr,
} from "./styled";

export type TablePropsType = {
  title: string;
  data: Array<{
    [key: string]: string;
  }>;
  onDeleteHandler: (id: number) => void;
  onSaveHandler: (id: number, row: RowType) => void;
  setSelectedRows?: React.Dispatch<React.SetStateAction<RowType[]>>;
  disabledColumn?: string[];
};

function Table({
  data,
  title,
  onDeleteHandler,
  onSaveHandler,
  setSelectedRows,
  disabledColumn,
}: TablePropsType) {
  const [selectAll, setSelectAll] = useState(false);
  if (data.length === 0) {
    return <h3>No data</h3>;
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
              <StyledCheckbox
                type="checkbox"
                onChange={() => setSelectAll(!selectAll)}
              />
            </Th>
            {keys
              .filter((el) => !disabledColumn?.includes(el))
              .map((key) => (
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
                setSelectedRows={setSelectedRows}
                disabledColumn={disabledColumn}
              />
            );
          })}
        </TBody>
      </StyledTable>
    </div>
  );
}
export default Table;
