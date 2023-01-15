import styled from "styled-components";

export const StyledApp = styled.div(
  ({ theme }) => `
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:400&display=swap');
  @import url("https://fonts.googleapis.com/css2?family=Cinzel&display=swap");
  font-family: "Montserrat", sans-serif;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  button {
    padding: 0;
    border none;
    cursor: pointer;
    background-color: transparent;
  }
`
);
