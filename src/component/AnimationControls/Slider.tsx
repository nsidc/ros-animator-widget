import React from 'react';

import { stateType as playbackStateType } from '../../state/playback';
import { useParams } from '../../state/params';


interface ISliderProps {
  playback: playbackStateType;
  currentFrame: number;
  totalFrames: number;
  handleSetFrame: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Slider: React.FC<ISliderProps> = (props) => {
  const { controlsOrientation } = useParams();

  // Firefox is not compatible with the HTML5 spec, so it has its own custom
  // attribute to set orientation. Spec says orientation should be set
  // automatically based on height:width ratio.
  const orient = controlsOrientation === 'right' ? 'vertical' : 'horizontal';

  return (
    <input
      type={'range'}
      min={'0'}
      max={props.totalFrames}
      value={props.currentFrame}
      onChange={props.handleSetFrame}
      disabled={props.playback === 'PLAYING'}
      style={{width: '75%'}}
      orient={orient} />
  )
}
export default Slider;
