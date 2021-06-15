import React from 'react';

import AnimationControls from './AnimationControls';


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
  playbackInterval: number;
  playback: 'PLAYING' | 'PAUSED';
}

const Animation: React.FC<IAnimationProps> = (props) => {
  const finalFrame = props.frames.length - 1
  const [frameIndex, setFrameIndex] = React.useState(initialFrame);

  const frameChangerCallback = React.useCallback((direction: 1 | -1) => {
    return setFrameIndex(frameChanger(direction, finalFrame));
  }, [finalFrame]);

  React.useEffect(
    () => {
      if (props.playback !== 'PLAYING') {
        return;
      }
      const interval = setInterval(
        () => {
          setFrameIndex(frameChanger(1, finalFrame));
        },
        props.playbackInterval,
      );

      return () => clearInterval(interval);
    },
    [props.playback, props.playbackInterval, props.frames, finalFrame]
  );

  return (
    <div className={'animation-container'}>
      <img src={props.frames[frameIndex]}
           alt={'Animated map data'} />
      <div>{frameIndex}</div>
      <AnimationControls incrementFrame={() => frameChangerCallback(1)}
                         decrementFrame={() => frameChangerCallback(-1)} />
    </div>
  );
}

export default Animation;
