import React from 'react';

import { stateType as playbackSpeedStateType } from '../../state/playbackSpeed';


interface IPlaybackSpeedProps {
  playbackSpeed: playbackSpeedStateType;
  handleChangeSpeed: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PlaybackSpeed: React.FC<IPlaybackSpeedProps> = (props) => {
  return (
    <input
      min={1}
      max={10}
      type={'number'}
      onChange={props.handleChangeSpeed}
      value={props.playbackSpeed}
      style={{width: '50px'}} />
  )
}
export default PlaybackSpeed;
