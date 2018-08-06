import React from 'react';
import { shallow } from 'enzyme';

import Description from '.';

test('render a Description', () => {
  const wrapper = shallow(
    <Description />,
  );
  expect(wrapper).toMatchSnapshot();
});
