import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  openModal: boolean;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
  openModal: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setOpenModal: (state) => {
      state.openModal = true;
    },
    setCloseModal: (state) => {
      state.openModal = false;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  setOpenModal,
  setCloseModal,
} = counterSlice.actions;
export default counterSlice.reducer;
