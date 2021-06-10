import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// TODO: DRY initialState. Why do we have to define it in createSlice _and_
// useReducer?
const initialState = {
  location: null as string | null,
  // frames: [],
}

const stateSlice = createSlice({
  name: "animation",
  initialState: initialState,
  reducers: {
    setLocation: (prevState, action: PayloadAction<string>) => {
      return {
        ...prevState,
        location: action.payload,
      };
    },
  },
});

export default stateSlice;
