import React from 'react';
import { shallow } from 'enzyme';
import CarouselProductPage from './CarouselProductPage';

describe('Component CarouselProductPage', () => {
  it('should render without crashing', () => {
    const component = shallow(<CarouselProductPage />);
    expect(component).toBeTruthy();
  });
});