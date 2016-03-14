import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import _ from 'lodash';

import '../../../../../node_modules/react-select/dist/react-select.css';

class AddIngredient extends Component {
  constructor(props) {
    super(props);

    let ingredientTypes = _.keys(props.ingredientOptions),
      currentIngredientType = _.head(ingredientTypes),
      ingredientNames = props.ingredientOptions[currentIngredientType],
      currentIngredientName = _.head(ingredientNames);

    this.state = {
      ingredientTypes,
      ingredientNames,
      currentIngredientType,
      currentIngredientName
    };
  }

  static propTypes = {
    ingredientOptions: PropTypes.shape({
      ingredientType: PropTypes.arrayOf(PropTypes.string),
    }),
  }

  static defaultProps = {
    ingredientOptions: {},
  }

  // ingredientTypes() {
  //   return _.keys(this.props.ingredientOptions);
  // }

  // ingredientNames() {
  //   return this.props.ingredientOptions[this.state.currentIngredientType]
  // }

  ingredientTypeSelectOptions() {
    return this.state.ingredientTypes.map((ingredientType) => {
      return { value: ingredientType, label: ingredientType };
    });
  }

  ingredientNameSelectOptions() {
    return this.state.ingredientNames.map((ingredientName) => {
      return { value: ingredientName, label: ingredientName };
    });
  }

  handleIngredientTypeChange(selection) {
    this.setState((previousState) => {
      return {
        currentIngredientType: selection.value,
        ingredientNames: this.props.ingredientOptions[selection.value],
        currentIngredientName: _.head(this.props.ingredientOptions[selection.value]),
      };
    });
  }

  handleIngredientNameChange(selection) {
    this.setState({ currentIngredientName: selection.value });
  }

  render() {
    return (
      <div id='ingredients'>
        <label htmlFor="ingredient_type">
          Type
        </label>
        <Select
          name='ingredient_type'
          value={this.state.currentIngredientType}
          options={this.ingredientTypeSelectOptions()}
          onChange={this.handleIngredientTypeChange.bind(this)}
        />

        <label htmlFor="ingredient_name">
          Ingredient
        </label>
        <Select
          name='ingredient_name'
          value={this.state.currentIngredientName}
          options={this.ingredientNameSelectOptions()}
          onChange={this.handleIngredientNameChange.bind(this)}
        />
      </div>
    );
  }
}

export default AddIngredient;
