import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// TODO: DRY initialState. Why do we have to define it in createSlice _and_
// useReducer?
const initialState = {
  location: null as string | null,
  frames: [] as Array<Blob>,
}

const stateSlice = createSlice({
  name: "animation",
  initialState: initialState,
  reducers: {
    setFrames: (prevState, action: PayloadAction<Array<Blob>>) => {
      return {
        ...prevState,
        frames: action.payload,
      }
    },
  },
});

export default stateSlice;
