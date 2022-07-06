import React from 'react';
import { shallow } from 'enzyme';
import Select from './Select';

describe('Component Select', () => {
  it('should render without crashing', () => {
    const component = shallow(<Select />);
    expect(component).toBeTruthy();
  });
});