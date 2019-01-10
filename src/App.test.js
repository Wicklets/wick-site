import React from 'react';
import ReactDOM from 'react-dom';
import WickContainer from './site_components/wick/WickContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WickContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
