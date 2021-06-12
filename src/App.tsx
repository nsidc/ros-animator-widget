import React from 'react';

import Interface from './component/Interface';
import './style/App.css';
import { StateProvider } from './state';


interface IAppProps {
  domElement: Element;
}

const App: React.FC<IAppProps> = (props) => {
  const animationLocation = props.domElement.getAttribute('data-animation');

  return (
    <StateProvider>
      <div className="ros-animator-widget-container">
        <Interface animationLocation={animationLocation} />
      </div>
    </StateProvider>
  );
}

export default App;
