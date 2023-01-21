import {createSlice} from "@reduxjs/toolkit";

const initialUIState = {
    isLoading: false
};

const uiSlice = createSlice({
    name: "ui",
    initialState: initialUIState,
    reducers: {
        setIsLoading(state, action) {
            state.isLoading = action.payload;
        }
    }});
export const uiActions = uiSlice.actions;
export default uiSlice;