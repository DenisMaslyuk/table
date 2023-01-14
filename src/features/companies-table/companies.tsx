import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Table from "../../shared/table";
import { CompanyDataType } from "./companies-data";
import { getCompaniesDataAsync, selectCompanies } from "./companies-slice";

function CompaniesTable() {
  const employees = useAppSelector(selectCompanies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCompaniesDataAsync());
  }, []);

  if (employees.length > 0) {
    return <Table title="Companies" data={employees as CompanyDataType[]} />;
  }
  return <h3>Loading...</h3>;
}
export default CompaniesTable;
