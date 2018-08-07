import React from 'react';
import { shallow } from 'enzyme';

import Hero from '.';

it('render a Hero', () => {
  const wrapper = shallow(
    <Hero />,
  );
  expect(wrapper).toMatchSnapshot();
});
