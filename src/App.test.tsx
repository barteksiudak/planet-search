import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { Planets } from './sites';

test('renders planets', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Planets)).toHaveLength(1);
});
