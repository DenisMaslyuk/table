import employeeReducer, { EmployeesState } from "./employeeSlice";

describe("counter reducer", () => {
  it("should handle initial state", () => {
    expect(employeeReducer(undefined, { type: "unknown" })).toEqual({
      date: [],
      status: "idle",
    });
  });

  // it("should handle get employeeData", () => {
  // const actual = employeeReducer(initialState, getEmployeeData);
  //  expect(actual.employeeData).toEqual([{}]);
  //});
});
