import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.accessToken;

    const response = await fetch(`${API_URL}api/products/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Не удалось получить товар");
    }

    return response.json();
  },
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
