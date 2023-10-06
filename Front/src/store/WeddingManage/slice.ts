import { createSlice } from "@reduxjs/toolkit";
import { GetFetchGallery } from "../../services/wedding.services";
import { FetchGallery } from "./thunkActions";


type weddingInitialState = {
    galleryList?: GetFetchGallery;
}

const initialState: weddingInitialState = {
    
}


export const { reducer: weddingReducer, actions: weddingActions} = createSlice({
    name: "wedding",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(FetchGallery.fulfilled, (state, action) => {
            state.galleryList = action.payload
        })
    }
})