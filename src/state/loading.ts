import { createSlice } from '@reduxjs/toolkit';

export const initialState = true;

const stateSlice = createSlice({
  name: "loading",
  initialState: initialState,
  reducers: {
    loaded: (prevState) => {
      return false
    },
  },
});

export default stateSlice;
