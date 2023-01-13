import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
`;
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
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  text-transform: capitalize;
  color: ${theme.colors.text};
`
);
export const TBody = styled.tbody``;
export const Td = styled.td(
  ({ theme }) => `
  padding: 16px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${theme.colors.text};
  text-align: left;
`
);
