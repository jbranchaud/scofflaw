import React, { Component, PropTypes } from 'react';

import _ from 'lodash';

class FormField extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    label: PropTypes.string.isRequired,
    fieldId: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired
  }

  static defaultProps = {
    label: '',
    fieldId: '',
    type: 'text',
    value: '',
    error: '',
    onChange: () => {},
  }

  renderInput() {
    switch (this.props.type) {
      case 'textarea':
        return (
          <textarea
            id={this.props.fieldId}
            name={this.props.fieldId}
            type={this.props.type}
            value={this.props.value}
            onChange={this.props.onChange}
          />
        )
      default:
        return (
          <input
            id={this.props.fieldId}
            name={this.props.fieldId}
            type={this.props.type}
            value={this.props.value}
            onChange={this.props.onChange}
          />
        );
    }
  }

  renderValidationError() {
    if (!_.isEmpty(this.props.error)) {
      return <span> {this.props.error}</span>
    }
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.fieldId}>
          {this.props.label}
        </label>
        { this.renderValidationError() }
        <br />
        { this.renderInput() }
      </div>
    );
  }
}

export default FormField;
