import React from 'react';
import { shallow } from 'enzyme';

import Header from '.';

it('render a Header', () => {
  const wrapper = shallow(
    <Header />,
  );
  expect(wrapper).toMatchSnapshot();
});
