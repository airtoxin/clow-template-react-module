import assert from 'assert';
import React from 'react';
import { mount } from 'enzyme';

describe('{{name}}', () => {
  it('calls componentDidMount', () => {
    const C = () => (<div />);
    const wrapper = mount(<C />);
    expect(C.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
