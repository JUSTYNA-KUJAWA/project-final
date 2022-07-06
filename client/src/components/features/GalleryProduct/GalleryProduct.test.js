import React from 'react';
import { shallow } from 'enzyme';
import GalleryProduct from './GalleryProduct';

describe('Component Home', () => {
  it('should render without crashing', () => {
    const component = shallow(<GalleryProduct/>);
    expect(component).toBeTruthy();
  });
});