import { useEffect, useState } from "react";
import { EditIcon, TrashIcon } from "./icons";
import {
  ActionContainer,
  EditButton,
  SaveButton,
  StyledCheckbox,
  StyledInput,
  Td,
  Tr,
  TrashButton,
} from "./styled";

export type RowType = {
  [key: string]: string;
};

type RowPropsType = {
  id: number;
  data: RowType;
  onDeleteHandler: (id: number) => void;
  onSaveHandler: (id: number, row: RowType) => void;
  selectAll: boolean;
  setSelectedRows?: React.Dispatch<React.SetStateAction<RowType[]>>;
  disabledColumn?: string[];
};

function Row({
  id,
  data,
  onDeleteHandler,
  onSaveHandler,
  selectAll,
  setSelectedRows,
  disabledColumn,
}: RowPropsType) {
  const [isEditing, setIsEditing] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [row, setRow] = useState({ ...data });

  useEffect(() => setRow({ ...data }), [data]);

  const onChangeHandler = (key: string, value: string) => {
    const newRow = { ...row };
    newRow[key] = value;
    setRow(newRow);
  };

  const onSaveCkick = () => {
    setIsEditing(false);
    onSaveHandler(id, row);
  };

  useEffect(() => setIsChecked(selectAll), [selectAll]);

  return (
    <Tr isChecked={isChecked}>
      <Td>
        <StyledCheckbox
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
            if (setSelectedRows) {
              if (!isChecked) {
                setSelectedRows((prev) => [...prev, row]);
              } else {
                setSelectedRows(
                  (prev) => prev.filter((el) => el.company !== row.company) // Вынести за блок
                );
              }
            }
          }}
        />
      </Td>
      {isEditing ? (
        <>
          {Object.keys(row)
            .filter((el) => !disabledColumn?.includes(el))
            .map((key) => (
              <Td style={{ padding: "8px" }}>
                {key === "n" ? (
                  <Td>{row[key]}</Td>
                ) : (
                  <StyledInput
                    type="text"
                    value={row[key]}
                    onChange={(event) =>
                      onChangeHandler(key, event.target.value)
                    }
                  />
                )}
              </Td>
            ))}
          <Td>
            <ActionContainer>
              <SaveButton type="button" onClick={onSaveCkick}>
                Save
              </SaveButton>
            </ActionContainer>
          </Td>
        </>
      ) : (
        <>
          {Object.keys(row)
            .filter((el) => !disabledColumn?.includes(el))
            .map((key) => (
              <Td>{row[key]}</Td>
            ))}{" "}
          <Td>
            <ActionContainer>
              <EditButton type="button" onClick={() => setIsEditing(true)}>
                <EditIcon />
              </EditButton>
              <TrashButton type="button" onClick={() => onDeleteHandler(id)}>
                <TrashIcon />
              </TrashButton>
            </ActionContainer>
          </Td>
        </>
      )}
    </Tr>
  );
}

export default Row;
