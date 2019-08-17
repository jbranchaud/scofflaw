import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

class NewIngredientType extends Component {
  static propTypes = {
    name: PropTypes.string,
  }

  static defaultProps = {
    name: '',
  }

  constructor() {
    super();
    this.state = {
      name: '',
      errors: {},
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    return $.ajax({
      method: 'POST',
      url: '/ingredient_types/react_create',
      dataType: 'json',
      data: { ingredient_type: { name: this.state.name } },
    })
      .done(() => {
        location.assign('/ingredient_types');
      })
      .fail((xhr) => {
        this.setState({ errors: xhr.responseJSON.errors });
      });
  }

  displayFlashMessage() {
    if (this.state.errors.name) {
      return (
        <div className="alert">{this.state.errors.name}</div>
      );
    }
    return (
      <span></span>
    );
  }

  render() {
    return (
      <div id="react-form">
        <h3>Webpack React Form</h3>

        { this.displayFlashMessage() }

        <form
          className="new_ingredient_type"
          id="react_new_ingredient_type"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="ingredient_type_name">
            Name
          </label>

          <input
            type="text"
            name="ingredient_type[name]"
            id="ingredient_type_name"
            value={this.state.name}
            onChange={this.handleChangeName}
          />

          <input
            type="submit"
            name="commit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default NewIngredientType;
