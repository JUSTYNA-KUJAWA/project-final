import React from 'react';
import { shallow } from 'enzyme';
import CarouselHomePage from './CarouselHomePage';

describe('Component Home', () => {
  it('should render without crashing', () => {
    const component = shallow(<CarouselHomePage />);
    expect(component).toBeTruthy();
  });
});