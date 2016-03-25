import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import _ from 'lodash';

import { addIngredient, changeIngredientType } from '../../actions';

import IngredientOptionsContainer from '../../containers/ingredient_options_container';
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

    this.handleIngredientNameChange = this.handleIngredientNameChange.bind(this);
    this.handleIngredientAmountChange = this.handleIngredientAmountChange.bind(this);
    this.handleAmountTypeChange = this.handleAmountTypeChange.bind(this);
    this.handleClickAddIngredient = (e) => {
      e.preventDefault();
      this.props.dispatch(addIngredient(this.getNewIngredient()));
    };
  }

  getNewIngredient() {
    return {
      amount: this.state.ingredientAmount,
      amountType: this.state.currentAmountType,
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

        <IngredientOptionsContainer />

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
          onClick={this.handleClickAddIngredient}
        />
      </div>
    );
  }
}

AddIngredient.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ingredientTypeName: PropTypes.string,
  ingredientNameOptions: PropTypes.arrayOf(PropTypes.string),
  ingredientOptions: PropTypes.shape({
    ingredientType: PropTypes.arrayOf(PropTypes.string),
  }),
  amountTypes: PropTypes.arrayOf(PropTypes.string),
};

AddIngredient.defaultProps = {
  ingredientOptions: {},
  amountTypes: [],
};

export default connect()(AddIngredient);
