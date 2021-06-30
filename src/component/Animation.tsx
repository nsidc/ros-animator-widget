import React from 'react';

import '../style/Animation.css';
import AnimationControls from './AnimationControls';
import Viewport from './Viewport';
import { useParams } from '../state/params';


const initialFrame = 0;
const frameChanger = (direction: 1 | -1, finalFrame: number) => {
  // Direction determines behavior; if we want to parameterize this callback
  // on incrementation amount, we could create a new piece of state, e.g.
  // `changeAmount`, and make this callback dependent on it. Or make
  // changeAmount a parameter to the callback, replacing direction?
  // ¯\_(ツ)_/¯
  const changeAmount = 1
  const goingUp: boolean = direction > 0;
  const resetFrame = goingUp ? initialFrame : finalFrame;
  const rolledOver = goingUp ?
    (newFrame: number) => newFrame > finalFrame :
    (newFrame: number) => newFrame < initialFrame;

  return (oldFrame: number): number => {
    const newFrame: number = oldFrame + (changeAmount * direction);

    if (rolledOver(newFrame)) {
      return resetFrame;
    } else {
      return newFrame;
    }
  };
}

interface IAnimationProps {
  frames: Array<string>;
  playbackFps: number;
  playback: 'PLAYING' | 'PAUSED';
}

const Animation: React.FC<IAnimationProps> = (props) => {
  const finalFrame = props.frames.length - 1
  const [frameIndex, setFrameIndex] = React.useState(initialFrame);

  const { controlsOrientation } = useParams();

  const frameChangerCallback = React.useCallback((direction: 1 | -1) => {
    return setFrameIndex(frameChanger(direction, finalFrame));
  }, [finalFrame]);

  React.useEffect(
    () => {
      if (props.playback !== 'PLAYING') {
        return;
      }
      const playbackInterval = 1000 / props.playbackFps;
      const interval = setInterval(
        () => {
          setFrameIndex(frameChanger(1, finalFrame));
        },
        playbackInterval,
      );

      return () => clearInterval(interval);
    },
    [props.playback, props.playbackFps, props.frames, finalFrame]
  );

  const classes = [
    'animation-container',
    `animation-layout-${controlsOrientation}`
  ];
  return (
    <div className={classes.join(' ')}>
      <Viewport
        frames={props.frames}
        currentFrame={frameIndex} />
      <AnimationControls
        frame={frameIndex}
        setFrame={setFrameIndex}
        totalFrames={finalFrame}
        incrementFrame={() => frameChangerCallback(1)}
        decrementFrame={() => frameChangerCallback(-1)} />
    </div>
  );
}

export default Animation;
