import React, { Component, PropTypes } from 'react';
import $ from 'jquery';

import IngredientListContainer from 'containers/ingredient_list_container';
import FormField from 'components/form_field';
import AddIngredient from './add_ingredient';

class NewRecipe extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
    };

    this.handleNameInputChange = this.handleChangeInput.bind(this, 'name');
    this.handleDescriptionInputChange = this.handleChangeInput.bind(this, 'description');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeInput(name, e) {
    this.setState({ [name]: e.target.value });
  }

  handleAddIngredientClick(newIngredient, e) {
    e.preventDefault();

    this.setState((previousState) => {
      return {
        ingredients: [
          ...previousState.ingredients,
          newIngredient,
        ],
      };
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const recipeData = {
      recipe: {
        name: this.props.recipe.name,
        description: this.props.recipe.description,
      },
    };

    return $.ajax({
      method: 'POST',
      url: '/recipes',
      dataType: 'json',
      data: recipeData,
    })
      .done(() => {
        location.assign('/recipes');
      })
      .fail((xhr) => {
        this.setState({ errors: xhr.responseJSON.errors });
      });
  }

  render() {
    return (
      <div>
        <h1>New Recipe</h1>

        <form
          className="new_ingredient_type"
          id="react_new_ingredient_type"
          onSubmit={this.handleSubmit}
        >
          <FormField
            label="Name"
            fieldId="recipe_name"
            type="text"
            value={this.props.recipe.name}
            error={this.state.errors.name}
            onChange={this.props.handleRecipeNameChange}
          />

          <FormField
            label="Description"
            fieldId="recipe_description"
            type="textarea"
            value={this.props.recipe.description}
            error={this.state.errors.description}
            onChange={this.props.handleRecipeDescriptionChange}
          />

          <IngredientListContainer />

          <AddIngredient />

          <input type="submit" name="commit" value="Create Recipe" />
        </form>
      </div>
    );
  }
}

NewRecipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleRecipeNameChange: PropTypes.func.isRequired,
  handleRecipeDescriptionChange: PropTypes.func.isRequired,
};

export default NewRecipe;
