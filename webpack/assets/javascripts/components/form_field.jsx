import React, { PropTypes } from 'react';
import _isEmpty from 'lodash/isEmpty';

const FormField = (props) => {
  const renderInput = () => {
    switch (props.type) {
      case 'textarea':
        return (
          <textarea
            id={props.fieldId}
            name={props.fieldId}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
          />
        );
      default:
        return (
          <input
            id={props.fieldId}
            name={props.fieldId}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
          />
        );
    }
  };

  const renderValidationError = () => {
    if (_isEmpty(props.error)) {
      return (<span></span>);
    }
    return (
      <span> {props.error}</span>
    );
  };

  return (
    <div>
      <label htmlFor={props.fieldId}>
        {props.label}
      </label>
      { renderValidationError() }
      <br />
      { renderInput() }
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  fieldId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

FormField.defaultProps = {
  label: '',
  fieldId: '',
  type: 'text',
  value: '',
  error: '',
  onChange: () => {},
};

export default FormField;
