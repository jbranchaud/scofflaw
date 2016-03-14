import React, { PropTypes } from 'react';

import FormField from '../form_field'
import AddIngredient from './add_ingredient'

class NewRecipe extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      ingredientOptions: {
        liquor: [
          'bourbon',
          'gin',
          'vodka',
        ],
        fruit: [
          'orange',
          'lemon',
          'lime',
        ],
      },
      amountTypes: [
        'ounce',
        'slice',
        'to taste',
      ],
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
          <FormField
            label='Name'
            fieldId='recipe_name'
            type='text'
            value={this.state.name}
            error={this.state.errors['name']}
            onChange={this.handleChangeInput.bind(this, 'name')}
          />

          <FormField
            label='Description'
            fieldId='recipe_description'
            type='textarea'
            value={this.state.description}
            error={this.state.errors['description']}
            onChange={this.handleChangeInput.bind(this, 'description')}
          />

          <AddIngredient
            ingredientOptions={this.state.ingredientOptions}
            amountTypes={this.state.amountTypes}
          />

          <input type='submit' name='commit' value='Create Recipe' />
        </form>
      </div>
    );
  }
}

export default NewRecipe;
