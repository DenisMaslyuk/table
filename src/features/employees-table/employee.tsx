import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Table from "../../shared/table";
import { StyledAddButton } from "../../shared/table/styled";
import { RowType } from "../../shared/table/row";
import { EmployeeDataType } from "./employee-data";
import {
  addEmployee,
  removeEmployee,
  saveEmpoyee,
  selectEmployee,
} from "./employeeSlice";

type EmployeesTableProps = {
  selectedRows: RowType[];
};

function EmployeesTable({ selectedRows }: EmployeesTableProps) {
  const { data: allEmployees, status } = useAppSelector(selectEmployee);
  const [filteredEmployees, setFilteredEmployees] = useState<
    EmployeeDataType[]
  >([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setFilteredEmployees(
      allEmployees.filter((em) => selectedRows[0].company == em.company)
    );
  }, [selectedRows, allEmployees]);

  const onDeleteHandler = (id: number) => {
    dispatch(removeEmployee(id));
  };

  const onSaveHandler = (id: number, row: RowType) => {
    dispatch(saveEmpoyee({ id, row }));
  };

  const onAddHandler = () => {
    if (selectedRows.length === 0) return;
    dispatch(addEmployee(selectedRows[0].company));
  };

  switch (status) {
    case "loading":
      return <h3>Loading...</h3>;
    case "failed":
      return <h3>Failed</h3>;
    default:
      break;
  }
  if (filteredEmployees.length === 0)
    return (
      <div>
        <h3>There are no employees in this company</h3>
        <StyledAddButton onClick={onAddHandler}>Add Employee</StyledAddButton>
      </div>
    );

  return (
    <Table
      title="Employees"
      data={filteredEmployees as EmployeeDataType[]}
      onDeleteHandler={onDeleteHandler}
      onSaveHandler={onSaveHandler}
      disabledColumn={["company"]}
      onAddHandler={onAddHandler}
    />
  );
}
export default EmployeesTable;
