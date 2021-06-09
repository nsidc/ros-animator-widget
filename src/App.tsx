import React from 'react';
import './App.css';

interface IAppProps {
  domElement: Element;
}

const App: React.FC<IAppProps> = (props) => {
  const animation = props.domElement.getAttribute('data-animation')

  return (
    <div className="ros-animator-widget-container">
      <header className="ros-animator-widget-header">

        <p>
          This is a test widget!
        </p>

      </header>
      <span>Content: {animation}</span>
    </div>
  );
}

export default App;
