import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';

import Note from '../../src/components/note/Note.jsx';

describe('<Note />', () => {
  it('should have class highlight when highlight prop returns true ', () => {
    const wrapper = shallow(<Note highlight={() => true} showOnHighlight={true} isNoteSelected={() => true} />);
    const className = wrapper.node.props.className;

    expect(className).to.contain('highlight');
  });

  it('should not render when highlight returns false and showOnHighlight is true ', () => {
    const wrapper = render(<Note highlight={() => false} showOnHighlight={true} isNoteSelected={() => true} />);
  });
});