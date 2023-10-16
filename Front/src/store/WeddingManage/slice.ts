import { createSlice } from "@reduxjs/toolkit";
import { GetFetchBanner, GetFetchGallery, GetFetchShowcase } from "../../services/wedding.services";
import { FetchGallery, FetchShowcase } from "./thunkActions";


type weddingInitialState = {
    banner?: GetFetchBanner;
    galleryList?: GetFetchGallery;
    showcaseList?: GetFetchShowcase;
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
        .addCase(FetchShowcase.fulfilled, (state, action) => {
            state.showcaseList = action.payload
        })
    }
})