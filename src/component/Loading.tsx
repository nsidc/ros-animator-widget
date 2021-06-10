import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import React from 'react';


const Loading: React.FC = () => (
  <FontAwesomeIcon
    icon={faSnowflake}
    size='6x'
    spin
    className='app-loading nsidc-blue' />
);

export default Loading;
