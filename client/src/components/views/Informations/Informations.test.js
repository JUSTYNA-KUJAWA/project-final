import React from 'react';
import { shallow } from 'enzyme';
import Informations from './Informations';

describe('Component Informations', () => {
  it('should render without crashing', () => {
    const component = shallow(<Informations />);
    expect(component).toBeTruthy();
  });
});