import "./App.css";
import { ThemeProvider } from "styled-components";
import { base, light } from "./app/theme";
import { StyledApp } from "./app/styled";
import EmployeesTable from "./features/employees-table/employee";
import CompaniesTable from "./features/companies-table/companies";
import { useState } from "react";
import { RowType } from "./shared/table/row";

function App() {
  const theme = { ...base, colors: light };
  const [selectedRows, setSelectedRows] = useState<RowType[]>([]);

  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <CompaniesTable setSelectedRows={setSelectedRows} />
        {selectedRows.length === 1 && (
          <EmployeesTable selectedRows={selectedRows} />
        )}
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
