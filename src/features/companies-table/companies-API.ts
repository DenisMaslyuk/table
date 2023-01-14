import { companiesData, CompanyDataType } from "./companies-data";

export function fetchCompaniesData() {
  return new Promise<CompanyDataType[]>((resolve) =>
    setTimeout(() => resolve(companiesData), 100)
  );
}
