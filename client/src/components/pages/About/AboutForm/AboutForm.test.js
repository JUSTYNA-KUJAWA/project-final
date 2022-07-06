import React from 'react';
import { shallow } from 'enzyme';
import AboutForm from './AboutForm';

describe('Component AboutForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<AboutForm />);
    expect(component).toBeTruthy();
  });
});