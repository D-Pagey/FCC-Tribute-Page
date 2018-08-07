import React from 'react';
import { shallow } from 'enzyme';

import Stats from '.';

it('renders the Stats', () => {
  const wrapper = shallow(
    <Stats />,
  );
  expect(wrapper).toMatchSnapshot();
});
