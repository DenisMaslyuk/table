import { employeesData, EmployeeDataType } from "./employee-data";

export function fetchEmployeeData() {
  return new Promise<EmployeeDataType[]>((resolve) =>
    setTimeout(() => resolve(employeesData), 100)
  );
}
