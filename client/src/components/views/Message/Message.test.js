import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

describe('Component Message', () => {
  it('should render without crashing', () => {
    const component = shallow(<Message />);
    expect(component).toBeTruthy();
  });
});