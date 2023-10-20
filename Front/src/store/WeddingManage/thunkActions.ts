import { createAsyncThunk } from "@reduxjs/toolkit";
import { weddingServices } from "../../services/wedding.services";

export const FetchBanner = createAsyncThunk(
  "weddingmanage/fetchgallery",
  async (_, { rejectWithValue }) => {
    try {
      const res = await weddingServices.FetchBanner();
      return res.data;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const FetchGallery = createAsyncThunk(
  "weddingmanage/fetchgallery",
  async (_, { rejectWithValue }) => {
    try {
      const res = await weddingServices.FetchGallery();
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const FetchShowcase = createAsyncThunk(
  "weddingmanage/fetchshowcase",
  async (_, { rejectWithValue }) => {
    try {
      const res = await weddingServices.FetchShowcase();
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const FetchFading = createAsyncThunk(
  "weddingmanage/fetchfading",
  async (_, { rejectWithValue }) => {
    try {
      const res = await weddingServices.FetchFading();
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
