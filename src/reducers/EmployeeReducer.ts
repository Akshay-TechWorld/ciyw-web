import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
    createEmployee,
} from '../Api/EmployeeApi';

const initialState = {
    employeeList: {}
};

export const createEmployeeAsync = createAsyncThunk(
    'employee/createEmployeeAsync',
    async (data: any) => {
        const response = await createEmployee(data)
        return response;
    },
)

// export const fetchEmployeeListAsync = createAsyncThunk(
//     'employee/fetchEmployeeListAsync',
//     async () => {
//         const response = await fetchEmployeeList();
//         return response;
//     },
// )

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(createEmployeeAsync.fulfilled, () => {
            console.log("Employee created successfully");
        })
        // builder.addCase(fetchEmployeeListAsync.fulfilled, (state, action) => {
        //     console.log("qqqq", action.payload);
        //     state.employeeList = action.payload;
        //     console.log("Employee created successfully");
        // })
    },
})

export default employeeSlice.reducer;