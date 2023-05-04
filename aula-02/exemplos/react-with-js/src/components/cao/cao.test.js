import React from 'react';
import ReactDOM from 'react-dom';
import Cao from './Cao';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cao />, div);
  ReactDOM.unmountComponentAtNode(div);
});