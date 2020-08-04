import React from 'react';
import { shallow } from 'enzyme';
import CharacterStats from './CharacterStats';

describe('CharacterStats component', () => {
  it('renders CharacterStats', () => {
    const wrapper = shallow(<CharacterStats health={100} attack={10} experience={0} />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
