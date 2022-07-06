import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';

describe('Component Home', () => {
  it('should render without crashing', () => {
    const component = shallow(<Contact />);
    expect(component).toBeTruthy();
  });
});