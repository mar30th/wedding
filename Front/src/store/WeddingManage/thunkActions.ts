import { createAsyncThunk } from "@reduxjs/toolkit";
import { weddingServices } from "../../services/wedding.services";

export const FetchGallery = createAsyncThunk(
  "weddingmanage/fetchgallery",
  async (_, { rejectWithValue }) => {
    try {
        const res = await weddingServices.FetchGallery();
        return res.data
        
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
