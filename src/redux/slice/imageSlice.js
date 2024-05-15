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
  initialLoad: true,
  category: "mountain",
};

export const fetchImagesByTag = createAsyncThunk(
  "/images/fetchImagesByTag",
  (tag, { getState }) => {
    const curState = getState();
    const { page } = curState.imageReducer;
    return axios
      .get(
        `
    https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=${initialState.perPage}&page=${page}&format=json&nojsoncallback=1`
      )
      .then((res) => {
        return { ...res.data };
      })
      .catch((err) => {
        throw err;
      });
  }
);

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    changePage: (state) => {
      state.page = state.page + 1;
      state.initialLoad = false;
    },
    changeCategory: (state, action) => {
      state.initialLoad = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImagesByTag.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchImagesByTag.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { pages, total, photo, page } = payload.photos || {};
        // console.log("in", initialLoad);
        state.page = page;
        state.pages = pages;
        state.total = total;

        if (state.initialLoad) {
          state.images = photo;
        } else {
          state.images = [...state.images, ...photo];
        }
        // if (initialLoad) {
        //   state.images = photo;
        // } else {
        //   state.images = [...state.images, ...photo];
        // }
      })
      .addCase(fetchImagesByTag.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { changePage, changeCategory } = imageSlice.actions;

export default imageSlice.reducer;
