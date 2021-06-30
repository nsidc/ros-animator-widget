import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Interface from './component/Interface';
import './style/App.css';
// TODO: Rename ./state/index.tsx to ./state/AppStateProvider?
import { StateProvider } from './state';
import {
  ControlsOrientationValue,
  ParamsContext,
} from './state/params';


interface IAppProps {
  domElement: Element;
}

const App: React.FC<IAppProps> = (props) => {
  const animationLocation = (props.domElement.getAttribute('data-animation') || '');
  const controlsOrientation = (props.domElement.getAttribute('data-controls-orientation') || 'bottom') as ControlsOrientationValue;
  const initialParams = {
    controlsOrientation,
    animationLocation,
    appId: uuidv4(),
  };

  if (!['bottom', 'right'].includes(controlsOrientation)) {
    throw new Error(
      `Unexpected data-controls-orientation: ${controlsOrientation}"`
    );
  }

  return (
    <ParamsContext.Provider value={initialParams} >
      <StateProvider>
        <div className="ros-animator-widget-container">
          <Interface />
        </div>
      </StateProvider>
    </ParamsContext.Provider>
  );
}

export default App;
