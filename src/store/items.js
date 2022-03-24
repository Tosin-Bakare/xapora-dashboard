import { createSelector, createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const slice = createSlice({
    name: 'item',
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
        reset: item => {
            item.loading = false;
            item.fetched = false;
            item.failed = false;
            item.data = null;
        },
        
        fetchItemsStart: item => {
            item.loading = true;
        },

        fetchItemsSuccess: (item, action) => {
            item.loading = false;
            item.fetched = true;
            item.data = action.payload;
            item.failed = false;
        },

        fetchItemsFail: (item, action) => {
            item.loading = false;
            itemFetched = false;
            item.data = action.payload;
            item.failed = true;
        },
    }
})

const {
    fetchItemsStart,
    fetchItemsSuccess,
    fetchItemsFail
} = slice.actions

export const getItems = () => (dispatch) => {
    dispatch(
        apiCallBegan({
            url: "/all?limit=10&offset=0",
            method: 'get',
            type: 'item',
            onStart: fetchItemsStart.type,
            onSuccess: fetchItemsSuccess.type,
            onError: fetchItemsFail.type
        })
    )
}

export const fetchItems = createSelector(
    (state) => state.entities.item,
    (item) => item
)

export default slice.reducer;