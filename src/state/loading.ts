import { createSlice } from '@reduxjs/toolkit';

// TODO: DRY initialState. Why do we have to define it in createSlice _and_
// useReducer?
const initialState = true;

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
