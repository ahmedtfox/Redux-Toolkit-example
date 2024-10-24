import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllPosts = createAsyncThunk(
  "posts/getAll",
  async (args, thunkAPI) => {
    try {
      const res = await axios.get(args);
      return res.data;
    } catch (err) {
      const { rejectWithValue } = thunkAPI;
      return rejectWithValue(err);
    }
  }
);
