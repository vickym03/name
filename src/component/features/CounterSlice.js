import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    inc: (state) => {
      state.count += 1;
    },
    dec: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { inc, dec, reset, incrementByAmount } = CounterSlice.actions;

export default CounterSlice.reducer;
