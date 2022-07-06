import React from 'react';
import { shallow } from 'enzyme';
import Payement from './Payement';

describe('Component Payement', () => {
  it('should render without crashing', () => {
    const component = shallow(<Payement />);
    expect(component).toBeTruthy();
  });
});