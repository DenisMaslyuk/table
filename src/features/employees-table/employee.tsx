import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Table from "../../shared/table";
import { EmployeeDataType } from "./employee-data";
import { getEmployeesDataAsync, selectEmployee } from "./employeeSlice";

function EmployeesTable() {
  const employees = useAppSelector(selectEmployee);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEmployeesDataAsync());
  }, []);

  if (employees.length > 0) {
    return <Table title="Employees" data={employees as EmployeeDataType[]} />;
  }
  return <h3>Loading...</h3>;
}
export default EmployeesTable;
