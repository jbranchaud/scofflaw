import React, { PropTypes } from 'react';

class NewIngredientType extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      errors: {}
    };
  }

  static propTypes = {
    name: PropTypes.string
  }

  static defaultProps = {
    name: ''
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
      data: { ingredient_type: { name: this.state.name } }
    })
      .done((xhr, status, err) => {
        location.assign('/ingredient_types');
      })
      .fail((xhr, status, err) => {
        this.setState({ errors: xhr.responseJSON.errors });
      });
  }

  displayFlashMessage() {
    if(this.state.errors.name) {
      return (<div className='alert'>{this.state.errors.name}</div>);
    }
  }

  render () {
    return (
      <div id='react-form'>
        <h3>Webpack React Form</h3>

        { this.displayFlashMessage() }

        <form className='new_ingredient_type' id='react_new_ingredient_type' onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor='ingredient_type_name'>Name</label>
          <input type='text' name='ingredient_type[name]' id='ingredient_type_name' value={this.state.name} onChange={this.handleChangeName.bind(this)} />
          <input type='submit' name='commit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default NewIngredientType;
