import React from 'react';


interface IViewportProps {
  frames: Array<string>;
  currentFrame: number;
}

const Viewport: React.FC<IViewportProps> = (props) => {

  return (
    <div className={'viewport-container'}>
      <img src={props.frames[props.currentFrame]}
           alt={'Animation frame'} />
    </div>
  );
}

export default Viewport;
