import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { RowType } from "../../shared/table/row";
import { fetchEmployeeData } from "./employee-API";
import { EmployeeDataType } from "./employee-data";

export type EmployeesState = {
  data: EmployeeDataType[] | [];
  status: "idle" | "loading" | "failed";
};

const initialState: EmployeesState = {
  data: [],
  status: "loading",
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
  reducers: {
    removeEmployee: (state, action: PayloadAction<number>) => {
      state.data.splice(action.payload, 1);
    },
    saveEmpoyee: (
      state,
      action: PayloadAction<{ id: number; row: RowType }>
    ) => {
      const newData = [...state.data];
      newData[action.payload.id] = action.payload.row;
      state.data = newData;
    },
  },
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

export const selectEmployee = (state: RootState) => state.employees;

export const { removeEmployee, saveEmpoyee } = employeesSlice.actions;

export default employeesSlice.reducer;
