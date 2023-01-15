import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Table from "../../shared/table";
import { RowType } from "../../shared/table/row";
import { EmployeeDataType } from "./employee-data";
import {
  getEmployeesDataAsync,
  removeEmployee,
  saveEmpoyee,
  selectEmployee,
} from "./employeeSlice";

function EmployeesTable() {
  const { data: employees, status } = useAppSelector(selectEmployee);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEmployeesDataAsync());
  }, []);

  const onDeleteHandler = (id: number) => {
    dispatch(removeEmployee(id));
  };

  const onSaveHandler = (id: number, row: RowType) => {
    dispatch(saveEmpoyee({ id, row }));
  };

  switch (status) {
    case "loading":
      return <h3>Loading...</h3>;
    case "failed":
      return <h3>Failed</h3>;
    default:
      break;
  }

  return (
    <Table
      title="Employees"
      data={employees as EmployeeDataType[]}
      onDeleteHandler={onDeleteHandler}
      onSaveHandler={onSaveHandler}
    />
  );
}
export default EmployeesTable;
