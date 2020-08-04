import React from 'react';
import { shallow } from 'enzyme';
import CharacterImage from './CharacterImage';

describe('CharacterImage component', () => {
  it('renders CharacterImage', () => {
    const wrapper = shallow(<CharacterImage image={'image'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
