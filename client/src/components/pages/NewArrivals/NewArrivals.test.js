import React from 'react';
import { shallow } from 'enzyme';
import NewArrivals from './NewArrivals';

describe('Component NewArrivals', () => {
  it('should render without crashing', () => {
    const component = shallow(<NewArrivals />);
    expect(component).toBeTruthy();
  });
});