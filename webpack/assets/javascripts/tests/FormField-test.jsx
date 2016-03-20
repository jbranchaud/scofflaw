import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import FormField from '../components/form_field';

describe('FormField', () => {
  it('renders a label', () => {
    const formField = TestUtils.renderIntoDocument(
      <FormField
        label="Name"
      />
    );

    const label = TestUtils.findRenderedDOMComponentWithTag(
      formField, 'label'
    );

    expect(label.getDOMNode().textContent).toEqual('Name');
  });
});
