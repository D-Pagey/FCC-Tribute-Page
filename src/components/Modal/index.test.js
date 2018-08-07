import React from 'react';
import { shallow } from 'enzyme';

import Modal from '.';

it('renders Modal', () => {
  const wrapper = shallow(
    <Modal />,
  );
  expect(wrapper).toMatchSnapshot();
});
