import React from 'react';


interface IAnimationProps {
  frames: Array<string>;
  playbackInterval: number;
}

const Animation: React.FC<IAnimationProps> = (props) => {
    const initialFrame = 0;
    const [frameIndex, setFrameIndex] = React.useState(initialFrame);

    React.useEffect(() => {
      setInterval(
        () => {
          setFrameIndex(old => {
            // Subtract 1 from the length because if e.length == 75, e[74]
            // is the last item on the list
            if (old >= props.frames.length - 1) {
              return initialFrame;
            } else {
              return old + 1;
            }
          });
        },
        props.playbackInterval,
      );
    }, [props.playbackInterval]);

    return (
      <div>
        <div>{frameIndex}</div>
        <img src={props.frames[frameIndex]} />
      </div>
    );
}

export default Animation;
