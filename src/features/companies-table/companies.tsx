import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Table from "../../shared/table";
import { CompanyDataType } from "./companies-data";
import {
  getCompaniesDataAsync,
  removeCompany,
  selectCompanies,
} from "./companies-slice";

function CompaniesTable() {
  const { data: companies, status } = useAppSelector(selectCompanies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (companies.length === 0) dispatch(getCompaniesDataAsync());
  }, []);

  const onDeleteHandler = (id: number) => {
    dispatch(removeCompany(id));
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
      title="Companies"
      data={companies as CompanyDataType[]}
      onDeleteHandler={onDeleteHandler}
    />
  );
}
export default CompaniesTable;
