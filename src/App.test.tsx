import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('renders App', () => {
  expect(shallow(<App />).find('h1')).toHaveLength(1);
});
