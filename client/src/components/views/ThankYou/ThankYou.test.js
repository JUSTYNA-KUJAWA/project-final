import React from 'react';
import { shallow } from 'enzyme';
import ThankYou from './ThankYou';

describe('Component ThankYou', () => {
  it('should render without crashing', () => {
    const component = shallow(<ThankYou />);
    expect(component).toBeTruthy();
  });
});