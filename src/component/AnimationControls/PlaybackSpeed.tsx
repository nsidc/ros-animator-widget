import React from 'react';

import '../../style/PlaybackSpeed.css';
import { stateType as playbackSpeedStateType } from '../../state/playbackSpeed';


interface IPlaybackSpeedProps {
  playbackSpeed: playbackSpeedStateType;
  handleChangeSpeed: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const PlaybackSpeed: React.FC<IPlaybackSpeedProps> = (props) => {
  return (
    <div className={'playback-speed-container'}>
      <div data-tip={'Frames per second'}>
        <label htmlFor={'playback-speed-input'}>Speed: </label>

        <input
          id={'playback-speed-input'}
          min={1}
          max={7}
          type={'number'}
          onChange={props.handleChangeSpeed}
          value={props.playbackSpeed}
          style={{width: '50px'}} />
      </div>
    </div>

  )
}
export default PlaybackSpeed;
