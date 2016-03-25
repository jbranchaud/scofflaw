import { connect } from 'react-redux';

import IngredientOptions from '../components/recipes/ingredient_options';

import { changeIngredientType, changeIngredientName } from '../actions';

const mapStateToProps = (state) => {
  const options = state.ingredientOptions.ingredientOptions;
  const ingredientTypes = _.keys(options);
  const ingredientNames = options[state.ingredientOptions.currentIngredientType];

  const ingredientTypeOptions = ingredientTypes.map((name) => (
    { value: name, label: name }
  ));
  const ingredientNameOptions = ingredientNames.map((name) => (
    { value: name, label: name }
  ));

  return {
    ingredientOptions: options,
    currentIngredientType: state.ingredientOptions.currentIngredientType,
    ingredientTypes: ingredientTypeOptions,
    currentIngredientName: state.ingredientOptions.currentIngredientName,
    ingredientNames: ingredientNameOptions,
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
  }
);

const IngredientOptionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientOptions);

export default IngredientOptionsContainer;
