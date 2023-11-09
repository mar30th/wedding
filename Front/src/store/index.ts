import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { weddingReducer } from "./WeddingManage/slice";


export const store = configureStore ({
    reducer: {
        weddingManage: weddingReducer,
    }
})

export type RootState = ReturnType <typeof store['getState']>
export type AppDispatch = typeof store['dispatch']
export const useAppDispatch: () => AppDispatch = useDispatch