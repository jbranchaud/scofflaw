import { connect } from 'react-redux';

import { keys } from 'lodash/keys';

import IngredientOptions from '../components/recipes/ingredient_options';

import {
  changeIngredientType,
  changeIngredientName,
  changeAmountType,
  changeIngredientAmount,
} from '../actions';

const mapStateToProps = (state) => {
  const options = state.ingredients.addIngredient.options;
  const ingredientTypes = keys(options);
  const ingredientNames = options[state.ingredients.addIngredient.currentIngredientType];

  const valuesToOptions = (values) => {
    return values.map((value) => {
      return { value, label: value };
    });
  };

  const ingredientTypeOptions = valuesToOptions(ingredientTypes);
  const ingredientNameOptions = valuesToOptions(ingredientNames);
  const amountTypeOptions = valuesToOptions(state.ingredients.addIngredient.amountTypes);

  const {
    currentIngredientType,
    currentIngredientName,
    currentAmountType,
    currentIngredientAmount,
  } = state.ingredients.addIngredient;

  return {
    currentIngredientType,
    currentIngredientName,
    currentAmountType,
    currentIngredientAmount,
    ingredientTypes: ingredientTypeOptions,
    ingredientNames: ingredientNameOptions,
    amountTypes: amountTypeOptions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleIngredientTypeChange: (selection) => {
      dispatch(changeIngredientType({
        newIngredientType: selection.value,
      }));
    },
    handleIngredientNameChange: (selection) => {
      dispatch(changeIngredientName({
        newIngredientName: selection.value,
      }));
    },
    handleAmountTypeChange: (selection) => {
      dispatch(changeAmountType({
        newAmountType: selection.value,
      }));
    },
    handleIngredientAmountChange: (e) => {
      dispatch(changeIngredientAmount({
        newIngredientAmount: e.target.value,
      }));
    },
  };
};

const IngredientOptionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientOptions);

export default IngredientOptionsContainer;
