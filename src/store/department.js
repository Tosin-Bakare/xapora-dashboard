import { createSelector, createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
    name: 'department',
    initialState: {
        loading: false,

        // success
        fetched: false,

        //failure
        failed: false,
        // data
        data: null
    },
    reducers: {
        reset: department => {
            department.loading = false;
            department.fetched = false;
            department.failed = false;
            department.data = null;
        },
        
        fetchDepartmentStart: department => {
            department.loading = true;
        },

        fetchDepartmentSuccess: (department, action) => {
            department.loading = false;
            department.fetched = true;
            department.data = action.payload;
            department.failed = false;
        },

        fetchDepartmentFail: (department, action) => {
            department.loading = false;
            department.Fetched = false;
            department.data = action.payload;
            department.failed = true;
        },
    }
})

const {
    fetchDepartmentStart,
    fetchDepartmentSuccess,
    fetchDepartmentFail
} = slice.actions

export const getDepartment = () => (dispatch) => {
    dispatch(
        apiCallBegan({
            url: "/all?limit=10&offset=0",
            method: 'get',
            type: 'department',
            onStart: fetchDepartmentStart.type,
            onSuccess: fetchDepartmentSuccess.type,
            onError: fetchDepartmentFail.type
        })
    )
}

export const fetchDepartment = createSelector(
    (state) => state.entities.department,
    (department) => department
)

export default slice.reducer;