import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiKey } from "../../api/config";
import axios from "axios";
const initialState = {
  images: [],
  isLoading: true,
  page: 1,
  pages: 0,
  perPage: 36,
  total: 0,
};

export const fetchImagesByTag = createAsyncThunk(
  "/images/fetchImagesByTag",
  (tag) => {
    return axios
      .get(
        `
    https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=${initialState.perPage}&format=json&nojsoncallback=1`
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        throw err;
      });
  }
);

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImagesByTag.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchImagesByTag.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { page, pages, total, photo } = payload.photos;
        state.page = page;
        state.pages = pages;
        state.total = total;
        state.images = photo;
      })
      .addCase(fetchImagesByTag.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = imageSlice.actions;

export default imageSlice.reducer;
