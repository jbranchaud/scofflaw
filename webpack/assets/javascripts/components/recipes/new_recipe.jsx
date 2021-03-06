import React, { Component, PropTypes } from 'react';
import TagsInput from 'react-tagsinput';
import $ from 'jquery';

import IngredientListContainer from 'containers/ingredient_list_container';
import FormField from 'components/form_field';
import AddIngredient from './add_ingredient';

import 'react-tagsinput/react-tagsinput.css';

class NewRecipe extends Component {
  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
  }

  static defaultProps = {
    name: '',
    description: '',
  }

  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      tags: [],
      errors: {},
    };

    this.handleNameInputChange = this.handleChangeInput.bind(this, 'name');
    this.handleDescriptionInputChange = this.handleChangeInput.bind(this, 'description');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeInput(name, e) {
    this.setState({ [name]: e.target.value });
  }

  handleTagsChange(tags) {
    this.setState({ tags });
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

    return $.ajax({
      method: 'POST',
      url: '/recipes',
      dataType: 'json',
      data: { recipe: { name: this.state.name, description: this.state.description } },
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
            value={this.state.name}
            error={this.state.errors.name}
            onChange={this.handleNameInputChange}
          />

          <FormField
            label="Description"
            fieldId="recipe_description"
            type="textarea"
            value={this.state.description}
            error={this.state.errors.description}
            onChange={this.handleDescriptionInputChange}
          />

          <IngredientListContainer />

          <AddIngredient
            ingredientOptions={this.state.ingredientOptions}
          />

          <label htmlFor="recipe_tags">
            Tags
          </label>
          <TagsInput value={this.state.tags} onChange={::this.handleTagsChange} />

          <input type="submit" name="commit" value="Create Recipe" />
        </form>
      </div>
    );
  }
}

export default NewRecipe;
