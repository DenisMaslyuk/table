import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchEmployeeData } from "./employee-API";
import { EmployeeDataType } from "./employee-data";

export type EmployeesState = {
  data: EmployeeDataType[] | [];
  status: "idle" | "loading" | "failed";
};

const initialState: EmployeesState = {
  data: [],
  status: "idle",
};

export const getEmployeesDataAsync = createAsyncThunk(
  "employeesData/fetchEmployeeData",
  async () => {
    const response = await fetchEmployeeData();
    return response;
  }
);

export const employeesSlice = createSlice({
  name: "employeesData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEmployeesDataAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getEmployeesDataAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(getEmployeesDataAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectEmployee = (state: RootState) => state.employees.data;

export default employeesSlice.reducer;
