import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App.jsx';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without error', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("[data-test='component-app']").length).toBe(1);
  // console.log(wrapper.debug()); //this just shows what the HTML would look like during this test
});