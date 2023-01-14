import "./App.css";
import { ThemeProvider } from "styled-components";
import { base, light } from "./app/theme";
import { StyledApp } from "./app/styled";
import EmployeesTable from "./features/employees-table/employee";
import CompaniesTable from "./features/companies-table/companies";

function App() {
  const theme = { ...base, colors: light };
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <EmployeesTable />
        <CompaniesTable />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
