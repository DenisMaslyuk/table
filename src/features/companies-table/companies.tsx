import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Table from "../../shared/table";
import { RowType } from "../../shared/table/row";
import { selectEmployee } from "../employees-table/employeeSlice";
import { CompanyDataType } from "./companies-data";
import {
  getCompaniesDataAsync,
  removeCompany,
  saveCompany,
  selectCompanies,
} from "./companies-slice";

type CompaniesTableProps = {
  setSelectedRows: React.Dispatch<React.SetStateAction<RowType[]>>;
};

function CompaniesTable({ setSelectedRows }: CompaniesTableProps) {
  const { data: companies, status } = useAppSelector(selectCompanies);
  const { data: employees, status: employeesStatus } =
    useAppSelector(selectEmployee);

  const [migrationCompanies, setMigrationCompanies] = useState(employees);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCompaniesDataAsync());
  }, []);

  useEffect(() => {
    setMigrationCompanies(
      companies.map((company) => {
        const number = employees
          .filter((em) => em.company === company.company)
          .length.toString();
        return { ...company, n: number };
      })
    );
  }, [employees, companies]);

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
      data={migrationCompanies as CompanyDataType[]}
      onDeleteHandler={onDeleteHandler}
      onSaveHandler={onSaveHandler}
      setSelectedRows={setSelectedRows}
    />
  );
}
export default CompaniesTable;
