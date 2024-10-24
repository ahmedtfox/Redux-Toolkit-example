import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllPosts = createAsyncThunk("posts/getAll", async () => {
  return (await axios.get("https://jsonplaceholder.typicode.com/posts")).data;
});
