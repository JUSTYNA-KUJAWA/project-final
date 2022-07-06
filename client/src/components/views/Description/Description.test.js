import React from 'react';
import { shallow } from 'enzyme';
import Description from './Description';

describe('Component Description', () => {
  it('should render without crashing', () => {
    const component = shallow(<Description />);
    expect(component).toBeTruthy();
  });
});