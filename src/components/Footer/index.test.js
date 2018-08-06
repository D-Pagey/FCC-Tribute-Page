import React from 'react';
import { shallow } from 'enzyme';

import Footer from '.';

test('render a footer', () => {
  const wrapper = shallow(
    <Footer />,
  );
  expect(wrapper).toMatchSnapshot();
});