import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import FormField from '../components/form_field';

describe("FormField", () => {
  it("renders the base component", () => {
    const wrapper = shallow(<FormField />);
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('input[type="text"]').length).toEqual(1);
    expect(wrapper.find('span').text()).toEqual('');
  });

  it('renders with label text', () => {
    const wrapper = shallow(<FormField label="Email" />);
    expect(wrapper.find('label').text()).toEqual('Email');
  });

  it('contains a text input when type is text', () => {
    const wrapper = shallow(<FormField type="text" />);
    expect(wrapper.find('input[type="text"]').length).toEqual(1);
  });

  it('contains a textarea when type is textarea',() => {
    const wrapper = shallow(<FormField type="textarea" />);
    expect(wrapper.find('textarea').length).toEqual(1);
  });

  it('renders an error when present',() => {
    const wrapper = shallow(<FormField error="cannot be blank" />);
    expect(wrapper.find('span').text()).toEqual(' cannot be blank');
  });
});
