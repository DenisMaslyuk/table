import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Table from "../../shared/table";
import { RowType } from "../../shared/table/row";
import { CompanyDataType } from "./companies-data";
import {
  getCompaniesDataAsync,
  removeCompany,
  saveCompany,
  selectCompanies,
} from "./companies-slice";

function CompaniesTable() {
  const { data: companies, status } = useAppSelector(selectCompanies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCompaniesDataAsync());
  }, []);

  const onDeleteHandler = (id: number) => {
    dispatch(removeCompany(id));
  };

  const onSaveHandler = (id: number, row: RowType) => {
    dispatch(saveCompany({ id, row }));
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
      onSaveHandler={onSaveHandler}
    />
  );
}
export default CompaniesTable;
