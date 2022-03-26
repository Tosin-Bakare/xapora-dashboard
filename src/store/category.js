import { createSelector, createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
    name: 'category',
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
        reset: category => {
            category.loading = false;
            category.fetched = false;
            category.failed = false;
            category.data = null;
        },
        
        fetchCategoryStart: category => {
            category.loading = true;
        },

        fetchCategorySuccess: (category, action) => {
            category.loading = false;
            category.fetched = true;
            category.data = action.payload;
            category.failed = false;
        },

        fetchCategoryFail: (category, action) => {
            category.loading = false;
            category.Fetched = false;
            category.data = action.payload;
            category.failed = true;
        },
    }
})

const {
    fetchCategoryStart,
    fetchCategorySuccess,
    fetchCategoryFail
} = slice.actions

export const getCategory = () => (dispatch) => {
    dispatch(
        apiCallBegan({
            url: "/all?limit=10&offset=0",
            method: 'get',
            type: 'category',
            onStart: fetchCategoryStart.type,
            onSuccess: fetchCategorySuccess.type,
            onError: fetchCategoryFail.type
        })
    )
}

export const fetchCategory = createSelector(
    (state) => state.entities.category,
    (category) => category
)

export default slice.reducer;