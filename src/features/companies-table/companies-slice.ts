import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchCompaniesData } from "./companies-API";
import { CompanyDataType } from "./companies-data";

export type companiesState = {
  data: CompanyDataType[] | [];
  status: "idle" | "loading" | "failed";
};

const initialState: companiesState = {
  data: [],
  status: "idle",
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
  reducers: {},
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

export const selectCompanies = (state: RootState) => state.companies.data;

export default companiesSlice.reducer;
