import React from 'react';
import { shallow } from 'enzyme';
import HeroProduct from './HeroProduct';

describe('Component HeroProduct', () => {
  it('should render without crashing', () => {
    const component = shallow(<HeroProduct />);
    expect(component).toBeTruthy();
  });
});