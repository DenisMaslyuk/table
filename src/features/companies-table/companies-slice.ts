import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { RowType } from "../../shared/table/row";
import { fetchCompaniesData } from "./companies-API";
import { CompanyDataType } from "./companies-data";

const defaultCompany: CompanyDataType = {
  company: "Company",
  address: "Address",
};

export type CompaniesState = {
  data: CompanyDataType[] | [];
  status: "idle" | "loading" | "failed";
};

const initialState: CompaniesState = {
  data: [],
  status: "loading",
};

export const getCompaniesDataAsync = createAsyncThunk(
  "companiesData/fetchcompaniesData",
  async () => {
    const response = await fetchCompaniesData();
    return response;
  }
);

export const companiesSlice = createSlice({
  name: "companiesData",
  initialState,
  reducers: {
    saveCompany: (
      state,
      action: PayloadAction<{ id: number; row: RowType }>
    ) => {
      state.data[action.payload.id] = action.payload.row;
    },
    removeCompany: (state, action: PayloadAction<number>) => {
      state.data.splice(action.payload, 1);
    },
    updateCompanies: (state, action: PayloadAction<CompanyDataType[]>) => {
      state.data = action.payload;
    },
    addCompany: (state) => {
      state.data = [defaultCompany, ...state.data];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCompaniesDataAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCompaniesDataAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(getCompaniesDataAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectCompanies = (state: RootState) => state.companies;

export const { removeCompany, saveCompany, updateCompanies, addCompany } =
  companiesSlice.actions;

export default companiesSlice.reducer;
