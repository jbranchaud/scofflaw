import React, { PropTypes } from 'react';

class NewRecipe extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      errors: {}
    };
  }

  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string
  }

  static defaultProps = {
    name: '',
    description: ''
  }

  handleChangeInput(name, e) {
    this.setState({ [name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();

    return $.ajax({
      method: 'POST',
      url: '/recipes',
      dataType: 'json',
      data: { recipe: { name: this.state.name, description: this.state.description } }
    })
      .done((xhr, status, err) => {
        console.log('CREATED NEW RECIPE SUCCESSFULLY');
        location.assign('/recipes');
      })
      .fail((xhr, status, err) => {
        console.log('FAILED TO CREATE NEW RECIPE');
        this.setState({ errors: xhr.responseJSON.errors });
      });
  }

  render() {
    return (
      <div>
        <h1>New Recipe</h1>

        <form
          className='new_item_type'
          id='react_new_item_type'
          onSubmit={this.handleSubmit.bind(this)}
        >
          <label htmlFor='recipe_name'>
            Name
          </label>
          <input
            id='recipe_name'
            name='recipe_name'
            type="text"
            value={this.state.name}
            onChange={this.handleChangeInput.bind(this, 'name')}
          />

          <label htmlFor='recipe_description'>
            Description
          </label>
          <textarea
            id='recipe_description'
            name='recipe_description'
            value={this.state.description}
            onChange={this.handleChangeInput.bind(this, 'description')}
          />

          <input type='submit' name='commit' value='Create Recipe' />
        </form>
      </div>
    );
  }
}

export default NewRecipe;
