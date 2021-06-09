import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const widgetDivs = document.querySelectorAll('.ros-animator-widget');

widgetDivs.forEach(div => {
  ReactDOM.render(
    <React.StrictMode>
      <App domElement={div} />
    </React.StrictMode>,
    div,
  );
});
