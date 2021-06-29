import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type stateType = number;
export const initialState = 4 as stateType;

const stateSlice = createSlice({
  name: "playbackFps",
  initialState: initialState,
  reducers: {
    setFps: (prevState, action: PayloadAction<number>) => {
      return action.payload;
    },
  },
});

export default stateSlice;
