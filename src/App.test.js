import React from 'react';
import ReactDOM from 'react-dom';
import Wick from './Wick';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Wick />, div);
  ReactDOM.unmountComponentAtNode(div);
});
