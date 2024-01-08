import React from 'react';

import { AbstractProps } from './types';

const Abstract: React.FC<AbstractProps> = (props: AbstractProps) => (
  <div className='abstract' onClick={props.onClick}>{props.summary}</div>
);

export default Abstract;
