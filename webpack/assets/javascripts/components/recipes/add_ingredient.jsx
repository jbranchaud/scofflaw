import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import _ from 'lodash';

import FormField from '../form_field';

import 'react-select/dist/react-select.css';

class AddIngredient extends Component {
  constructor(props) {
    super(props);

    const ingredientTypes = _.keys(props.ingredientOptions);
    const currentIngredientType = _.head(ingredientTypes);
    const ingredientNames = props.ingredientOptions[currentIngredientType];
    const currentIngredientName = _.head(ingredientNames);
    const ingredientAmount = '';
    const amountTypes = props.amountTypes;
    const currentAmountType = _.head(amountTypes);

    this.state = {
      ingredientTypes,
      ingredientNames,
      currentIngredientType,
      currentIngredientName,
      ingredientAmount,
      amountTypes,
      currentAmountType,
    };

    this.handleIngredientTypeChange = this.handleIngredientTypeChange.bind(this);
    this.handleIngredientNameChange = this.handleIngredientNameChange.bind(this);
    this.handleIngredientAmountChange = this.handleIngredientAmountChange.bind(this);
    this.handleAmountTypeChange = this.handleAmountTypeChange.bind(this);
    this.handleAddIngredientClick =
      this.props.handleAddIngredientClick.bind(this, this.getNewIngredient());
  }

  getNewIngredient() {
    return {
      id: this.props.ingredientCount + 1,
      type: this.state.currentIngredientType,
      name: this.state.currentIngredientName,
      amount: this.state.ingredientAmount,
      amountType: this.state.currentIngredientType,
    };
  }

  ingredientTypeSelectOptions() {
    return this.state.ingredientTypes.map((ingredientType) => (
      { value: ingredientType, label: ingredientType }
    ));
  }

  ingredientNameSelectOptions() {
    return this.state.ingredientNames.map((ingredientName) => (
      { value: ingredientName, label: ingredientName }
    ));
  }

  amountTypeSelectOptions() {
    return this.state.amountTypes.map((amountType) => (
      { value: amountType, label: amountType }
    ));
  }

  handleAmountTypeChange(selection) {
    this.setState({ currentAmountType: selection.value });
  }

  handleIngredientTypeChange(selection) {
    this.setState(() => ({
      currentIngredientType: selection.value,
      ingredientNames: this.props.ingredientOptions[selection.value],
      currentIngredientName: _.head(this.props.ingredientOptions[selection.value]),
    }));
  }

  handleIngredientNameChange(selection) {
    this.setState({ currentIngredientName: selection.value });
  }

  handleIngredientAmountChange(e) {
    this.setState({ ingredientAmount: e.target.value });
  }

  render() {
    return (
      <div id="ingredients">
        <h3>Add an ingredient</h3>

        <label htmlFor="ingredient_type">
          Type
        </label>
        <Select
          name="ingredient_type"
          id="ingredient_type"
          value={this.state.currentIngredientType}
          options={this.ingredientTypeSelectOptions()}
          onChange={this.handleIngredientTypeChange}
        />

        <label htmlFor="ingredient_name">
          Ingredient
        </label>
        <Select
          name="ingredient_name"
          value={this.state.currentIngredientName}
          options={this.ingredientNameSelectOptions()}
          onChange={this.handleIngredientNameChange}
        />

        <FormField
          label="Amount"
          fieldId="ingredient_amount"
          type="text"
          value={this.state.ingredientAmount}
          onChange={this.handleIngredientAmountChange}
        />

        <label htmlFor="amount_type">
          Amount Type
        </label>
        <Select
          name="amount_type"
          value={this.state.currentAmountType}
          options={this.amountTypeSelectOptions()}
          onChange={this.handleAmountTypeChange}
        />

        <input
          type="submit"
          name="commit"
          value="Add Ingredient"
          onClick={this.handleAddIngredientClick}
        />
      </div>
    );
  }
}

AddIngredient.propTypes = {
  ingredientOptions: PropTypes.shape({
    ingredientType: PropTypes.arrayOf(PropTypes.string),
  }),
  amountTypes: PropTypes.arrayOf(PropTypes.string),
  ingredientCount: PropTypes.number.isRequired,
  handleAddIngredientClick: PropTypes.func.isRequired,
};

AddIngredient.defaultProps = {
  ingredientOptions: {},
  amountTypes: [],
  ingredientCount: 0,
  handleAddIngredientClick: () => {},
};

export default AddIngredient;
