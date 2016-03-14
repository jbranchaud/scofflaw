import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import _ from 'lodash';

import FormField from '../form_field'
import '../../../../../node_modules/react-select/dist/react-select.css';

class AddIngredient extends Component {
  constructor(props) {
    super(props);

    let ingredientTypes = _.keys(props.ingredientOptions),
      currentIngredientType = _.head(ingredientTypes),
      ingredientNames = props.ingredientOptions[currentIngredientType],
      currentIngredientName = _.head(ingredientNames),
      ingredientAmount = '',
      amountTypes = props.amountTypes,
      currentAmountType = _.head(amountTypes);

    this.state = {
      ingredientTypes,
      ingredientNames,
      currentIngredientType,
      currentIngredientName,
      ingredientAmount,
      amountTypes,
      currentAmountType,
    };
  }

  static propTypes = {
    ingredientOptions: PropTypes.shape({
      ingredientType: PropTypes.arrayOf(PropTypes.string),
    }),
    amountTypes: PropTypes.arrayOf(PropTypes.string),
  }

  static defaultProps = {
    ingredientOptions: {},
    amountTypes: [],
  }

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

  amountTypeSelectOptions() {
    return this.state.amountTypes.map((amountType) => {
      return { value: amountType, label: amountType };
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

  handleIngredientAmountChange(e) {
    this.setState({ ingredientAmount: e.target.value });
  }

  handleAmountTypeChange(selection) {
    this.setState({ currentAmountType: selection.value });
  }

  render() {
    return (
      <div id='ingredients'>
        <h3>Add an ingredient</h3>

        <label htmlFor="ingredient_type">
          Type
        </label>
        <Select
          name='ingredient_type'
          id='ingredient_type'
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

        <FormField
          label='Amount'
          fieldId='ingredient_amount'
          type='text'
          value={this.state.ingredientAmount}
          onChange={this.handleIngredientAmountChange.bind(this)}
        />

        <label htmlFor="amount_type">
          Amount Type
        </label>
        <Select
          name='amount_type'
          value={this.state.currentAmountType}
          options={this.amountTypeSelectOptions()}
          onChange={this.handleAmountTypeChange.bind(this)}
        />
      </div>
    );
  }
}

export default AddIngredient;
