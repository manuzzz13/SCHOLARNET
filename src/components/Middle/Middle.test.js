import React from 'react';
import ReactDOM from 'react-dom';
import Middle from './Middle';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Middle />, div);
  ReactDOM.unmountComponentAtNode(div);
});
