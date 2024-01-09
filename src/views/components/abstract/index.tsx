import React, { useEffect } from 'react';
import axios from 'axios';

import { AbstractProps } from './types';

const clickHandle = async function () {
  const data = await axios.get('/getInfo');
  console.log(data);
};

const Abstract: React.FC<AbstractProps> = (props: AbstractProps) => {
  useEffect(() => {
    console.log('');
  }, []);

  return (<div className='abstract' onClick={clickHandle || props.onClick}>{props.summary}</div>);
};

export default Abstract;
