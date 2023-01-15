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
  width: 100%;
  border-spacing: 0;
  border: 2px solid ${theme.colors.border};
  border-radius: 16px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  font-weight: 800;
`
);
export const THead = styled.thead``;
export const Tr = styled.tr(
  ({ theme }) => `

  &:nth-child(odd) {
    td {
      background-color: ${theme.colors.additionalBackground};
    }
}
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

export const ActionContainer = styled.div(
  () => `
  display: flex;
  justify-content: center;
  gap: 12px;
`
);

export const EditButton = styled.button(
  ({ theme }) => `
    color: ${theme.colors.title};

    &:hover {
      color: ${theme.colors.titleHover};
    }
`
);

export const TrashButton = styled.button(
  ({ theme }) => `
    color: ${theme.colors.error};

    &:hover {
      color: ${theme.colors.errorHover};
    }
`
);
