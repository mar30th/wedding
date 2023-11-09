import { createSlice } from "@reduxjs/toolkit";
import { GetFetchBanner, GetFetchFading, GetFetchGallery, GetFetchShowcase } from "../../services/wedding.services";
import { FetchFading, FetchGallery, FetchShowcase } from "./thunkActions";


type weddingInitialState = {
    banner?: GetFetchBanner;
    galleryList?: GetFetchGallery;
    showcaseList?: GetFetchShowcase;
    fadingList?: GetFetchFading;
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
        .addCase(FetchFading.fulfilled, (state, action) => {
            state.fadingList = action.payload
        })
    }
})