import React from 'react';
import { shallow } from 'enzyme';

import Description from '.';

it('render a Description', () => {
  const wrapper = shallow(
    <Description />,
  );
  expect(wrapper).toMatchSnapshot();
});
