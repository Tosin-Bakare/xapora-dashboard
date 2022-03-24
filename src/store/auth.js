import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'auth',
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
        reset: {
            loading: false,
            fetched: false,
            failed: false,
            data: null,
        },
        
    }
})