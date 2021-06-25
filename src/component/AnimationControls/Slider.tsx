import React from 'react';

import { stateType as playbackStateType } from '../../state/playback';


interface ISliderProps {
  playback: playbackStateType;
  currentFrame: number;
  totalFrames: number;
  handleSetFrame: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Slider: React.FC<ISliderProps> = (props) => {
  return (
    <input
      type={'range'}
      min={'0'}
      max={props.totalFrames}
      value={props.currentFrame}
      onChange={props.handleSetFrame}
      disabled={props.playback === 'PLAYING'}
      style={{width: '75%'}} />
  )
}
export default Slider;
