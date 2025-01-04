import { configureStore } from "@reduxjs/toolkit";
import EmployeeReducer from "./reducers/EmployeeReducer";

export const store = configureStore({
    reducer: {
        employeeState: EmployeeReducer,
    },
});

export type appDispatch = typeof store.dispatch;
