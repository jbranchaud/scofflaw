import { connect } from 'react-redux';

import _keys from 'lodash/keys';
import _get from 'lodash/get';
import _map from 'lodash/map';

import IngredientOptions from 'components/recipes/ingredient_options';

import {
  changeIngredientType,
  changeIngredientName,
  changeAmountType,
  changeIngredientAmount,
} from '../actions';

const mapStateToProps = (state) => {
  const options = _get(state, 'ingredients.addIngredient.options');

  const {
    currentIngredientType,
    currentIngredientName,
    currentAmountType,
    currentIngredientAmount,
  } = _get(state, 'ingredients.addIngredient', {});

  const ingredientTypes = _keys(options);
  const ingredientNames = _get(options, currentIngredientType);
  const amountTypes = _get(state, 'ingredients.addIngredient.amountTypes');

  const valuesToOptions = (values) => {
    return _map(values, (value) => {
      return { value, label: value };
    });
  };

  const ingredientTypeOptions = valuesToOptions(ingredientTypes);
  const ingredientNameOptions = valuesToOptions(ingredientNames);
  const amountTypeOptions = valuesToOptions(amountTypes);

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
