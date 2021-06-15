import { createSlice } from '@reduxjs/toolkit';

export type stateType = 'PLAYING' | 'PAUSED';
export const initialState = 'PAUSED' as stateType;

const stateSlice = createSlice({
  name: "playback",
  initialState: initialState,
  reducers: {
    togglePlayback: (prevState) => {
      return prevState === 'PLAYING' ? 'PAUSED' : 'PLAYING'
    },
  },
});

export default stateSlice;
