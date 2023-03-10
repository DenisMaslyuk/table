import styled from "styled-components";

export const StyledTitle = styled.div(
  ({ theme }) => `
    display: flex;
    flex-diraction: column;
    justify-content: center;
    margin: 20px 0;

    div {
      width: min-content;

      h2 {
        font-size: 40px;
        margin: 0;
        font-weight: 800;
        font-family: "Cinzel";
        text-align: center;
        line-height: 30px;
        color: ${theme.colors.title};
      }

      h3 {
        margin: 0;
        font-family: "Cinzel";
        font-weight: 400;
        text-align: right;
      }
    }
`
);

export const StyledTable = styled.table(
  ({ theme }) => `
  margin-top: 20px;
  width: 100%;
  border-spacing: 0;
  border: 2px solid ${theme.colors.border};
  border-radius: 16px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  font-weight: 800;
`
);

export const AddButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const THead = styled.thead``;
export const Tr = styled.tr<{ isChecked?: boolean }>(
  ({ theme, isChecked }) => `
  
  &:nth-child(odd) {
    td {
      background-color: ${
        isChecked ? "#d9d4f8" : theme.colors.additionalBackground
      };
    }
  }
  ${isChecked ? " td { background-color: #d9d4f8;}" : ""}
`
);
export const Th = styled.th(
  ({ theme }) => `
  padding: 16px;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 16px;
  text-align: left;
  text-transform: capitalize;
  color: ${theme.colors.text};
`
);
export const TBody = styled.tbody``;
export const Td = styled.td(
  ({ theme }) => `
  padding: 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${theme.colors.text};
  text-align: left;

`
);

export const StyledCheckbox = styled.input(
  () => `
  cursor: pointer;
`
);

export const StyledInput = styled.input(
  ({ theme }) => `
  width: 90%;
  margin: 4px 8px 4px 0; 
  border: 1px solid ${theme.colors.border};
  border-radius: 8px;
  font-size: 14px;
  padding: 8px 8px;
  font-family: "Montserrat";
`
);

export const ActionContainer = styled.div(
  () => `
  display: flex;
  justify-content: center;
  gap: 12px;
`
);

export const SaveButton = styled.button(
  ({ theme }) => `
    padding: 4px 12px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background-color: ${theme.colors.saveButton};
    color: ${theme.colors.background};
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${theme.colors.titleHover};
    }
`
);

export const StyledAddButton = styled(SaveButton)`
  font-size: 20px;
  padding: 8px 24px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

export const EditButton = styled.button(
  ({ theme }) => `

    padding: 0;
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: ${theme.colors.title};

    &:hover {
      color: ${theme.colors.titleHover};
    }
`
);

export const TrashButton = styled.button(
  ({ theme }) => `
    padding: 0;
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: ${theme.colors.error};

    &:hover {
      color: ${theme.colors.errorHover};
    }
`
);
