import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

import '../style/Failed.css';


const Failed: React.FC = () => {
  return (
    <div className={'error-container'}>

      <FontAwesomeIcon
        icon={faBug}
        size='6x'
        className={'error-icon'} />

      <div className={'error-message'}>
        Something went wrong!
      </div>

      <div>
        {'Contact NSIDC User Services at '}
        <a href={'mailto:nsidc@nsidc.org'}>nsidc@nsidc.org</a>
        {' for help.'}
      </div>
    </div>
  );
}

export default Failed;
