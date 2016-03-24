import React, { PropTypes } from 'react';
import TagsInput from 'react-tagsinput';

import IngredientListContainer from '../../containers/ingredient_list_container';
import FormField from '../form_field';
import AddIngredient from './add_ingredient';

import 'react-tagsinput/react-tagsinput.css';

class NewRecipe extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      ingredients: [
        {
          id: 1,
          type: 'liquor',
          name: 'bourbon',
          amount: '3',
          amountType: 'ounce'
        },
        {
          id: 2,
          type: 'fruit',
          name: 'orange',
          amount: '2',
          amountType: 'slice'
        },
      ],
      amountTypes: [
        'ounce',
        'slice',
        'to taste',
      ],
      tags: [],
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

  handleTagsChange(tags) {
    this.setState({tags});
  }

  handleAddIngredientClick(newIngredient, e) {
    e.preventDefault();

    this.setState((previousState) => {
      return {
        ingredients: [
          ...previousState.ingredients,
          newIngredient
        ]
      }
    });
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
        location.assign('/recipes');
      })
      .fail((xhr, status, err) => {
        this.setState({ errors: xhr.responseJSON.errors });
      });
  }

  render() {
    return (
      <div>
        <h1>New Recipe</h1>

        <form
          className='new_ingredient_type'
          id='react_new_ingredient_type'
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

          <IngredientListContainer />

          <AddIngredient
            ingredientOptions={this.state.ingredientOptions}
            amountTypes={this.state.amountTypes}
            ingredientCount={this.state.ingredients.length}
          />

          <label htmlFor="recipe_tags">
            Tags
          </label>
          <TagsInput value={this.state.tags} onChange={::this.handleTagsChange} />

          <input type='submit' name='commit' value='Create Recipe' />
        </form>
      </div>
    );
  }
}

export default NewRecipe;
