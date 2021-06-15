import { createSlice } from '@reduxjs/toolkit';

export const initialState = 'PAUSED' as 'PLAYING' | 'PAUSED';

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
