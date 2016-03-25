import { connect } from 'react-redux';

import IngredientOptions from '../components/recipes/ingredient_options';

import { changeIngredientType, changeIngredientName, changeAmountType } from '../actions';

const mapStateToProps = (state) => {
  const options = state.ingredients.addIngredient.options;
  const ingredientTypes = _.keys(options);
  const ingredientNames = options[state.ingredients.addIngredient.currentIngredientType];

  const ingredientTypeOptions = ingredientTypes.map((name) => (
    { value: name, label: name }
  ));
  const ingredientNameOptions = ingredientNames.map((name) => (
    { value: name, label: name }
  ));
  const amountTypeOptions = state.ingredients.addIngredient.amountTypes.map((name) => (
    { value: name, label: name }
  ));

  return {
    ingredientOptions: options,
    currentIngredientType: state.ingredients.addIngredient.currentIngredientType,
    ingredientTypes: ingredientTypeOptions,
    currentIngredientName: state.ingredients.addIngredient.currentIngredientName,
    ingredientNames: ingredientNameOptions,
    currentAmountType: state.ingredients.addIngredient.currentAmountType,
    amountTypes: amountTypeOptions,
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    handleIngredientTypeChange: (selection) => {
      dispatch(changeIngredientType({
        newIngredientType: selection.value,
      }))
    },
    handleIngredientNameChange: (selection) => {
      dispatch(changeIngredientName({
        newIngredientName: selection.value,
      }))
    },
    handleAmountTypeChange: (selection) => {
      dispatch(changeAmountType({
        newAmountType: selection.value,
      }))
    },
  }
);

const IngredientOptionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientOptions);

export default IngredientOptionsContainer;
