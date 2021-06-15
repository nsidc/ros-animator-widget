import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import { stateType as playbackStateType } from '../../state/playback';


const icon = (playback: playbackStateType): JSX.Element => {
  if (playback === 'PAUSED') {
    return (
      <FontAwesomeIcon icon={faPlay} />
    );
  } else {
    return (
      <FontAwesomeIcon icon={faPause} />
    );
  }
}

interface IPlayPauseProps {
  playback: playbackStateType;
  handleTogglePlayback: () => void;
}

const PlayPause: React.FC<IPlayPauseProps> = (props) => {
  return (
    <button onClick={props.handleTogglePlayback}>
      {icon(props.playback)}
    </button>
  )
}
export default PlayPause;
