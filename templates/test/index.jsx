import assert from 'assert';
import React from 'react';
import { mount } from 'enzyme';

describe('{{name}}', () => {
  it('calls componentDidMount', () => {
    let clicked = false;
    const C = () => (<div onClick={() => clicked = true}/>);
    const wrapper = mount(<C />);
    wrapper.find('div').simulate('click');
    assert.strictEqual(clicked, true);
  });
});
