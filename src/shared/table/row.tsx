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
};

function Row({
  id,
  data,
  onDeleteHandler,
  onSaveHandler,
  selectAll,
}: RowPropsType) {
  const [isEditing, setIsEditing] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [row, setRow] = useState({ ...data });

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
          onChange={() => setIsChecked(!isChecked)}
        />
      </Td>
      {isEditing ? (
        <>
          {Object.keys(row).map((key, id) => (
            <Td style={{ padding: "8px" }}>
              <StyledInput
                type="text"
                value={row[key]}
                onChange={(event) => onChangeHandler(key, event.target.value)}
              />
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
          {Object.values(data).map((value) => (
            <Td key={value}>{value}</Td>
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
