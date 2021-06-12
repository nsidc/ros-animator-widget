import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// TODO: DRY initialState. Why do we have to define it in createSlice _and_
// useReducer?
export const initialState = {
  location: null as string | null,
  // Frames are represented as ObjectURLs
  frames: [] as Array<string>,
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
    setFrames: (prevState, action: PayloadAction<Array<string>>) => {
      return {
        ...prevState,
        frames: action.payload,
      };
    },
  },
});

export default stateSlice;
