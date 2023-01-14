import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import employeeReducer from "../features/employees-table/employeeSlice";
import companiesReduser from "../features/companies-table/companies-slice";

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
    companies: companiesReduser,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
