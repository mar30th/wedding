import { createSlice } from "@reduxjs/toolkit";
import { GetFetchBanner, GetFetchGallery } from "../../services/wedding.services";
import { FetchBanner, FetchGallery } from "./thunkActions";


type weddingInitialState = {
    language?: string;
    banner?: GetFetchBanner;
    galleryList?: GetFetchGallery;
}

const initialState: weddingInitialState = {
    language: "EN"
}


export const { reducer: weddingReducer, actions: weddingActions} = createSlice({
    name: "wedding",
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            console.log(action.payload);
            
            state.language = action.payload
        }
    },
    extraReducers(builder) {
        builder
        .addCase(FetchGallery.fulfilled, (state, action) => {
            state.galleryList = action.payload
        })
        // .addCase(FetchBanner.fulfilled, (state, action) => {
        //     state.banner = action.payload
        // })
    }
})