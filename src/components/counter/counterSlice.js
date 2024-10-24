import { createSlice } from "@reduxjs/toolkit";

// 3-create slice
const initialState = {
  count: 0,
  name: "ahmed",
};

const counterSlice = createSlice({
  name: "counterApp",
  initialState,
  reducers: {
    addOne: (state) => {
      state.count += 1;
    },
    minusOne: (state) => {
      state.count -= 1;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { addOne, minusOne, setName } = counterSlice.actions;

export default counterSlice.reducer;
