import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';

import Neck from '../../src/components/neck/Neck.jsx';

describe('<Neck />', function () {
  it('Should contain a list of 6 strings', function() {
    const wrapper = shallow(<Neck />);
    const strings = wrapper.find('String');

    expect(strings.nodes.length).to.equal(6);
  });
});