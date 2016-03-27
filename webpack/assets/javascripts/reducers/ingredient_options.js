import _head from 'lodash/head';
import _get from 'lodash/get';

const ingredientName = (state, action) => {
  switch (action.type) {
    case 'CHANGE_INGREDIENT_TYPE': {
      if (action.newIngredientType === state.currentIngredientType) return {};
      const newIngredientName = _head(_get(state.options, action.newIngredientType));
      return {
        currentIngredientName: newIngredientName,
      };
    }
    default:
      return state;
  }
};

const ingredientOptions = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_INGREDIENT_TYPE':
      return {
        ...state,
        currentIngredientType: action.newIngredientType,
        ...ingredientName(state, action),
      };
    case 'CHANGE_INGREDIENT_NAME':
      return {
        ...state,
        currentIngredientName: action.newIngredientName,
      };
    case 'CHANGE_AMOUNT_TYPE':
      return {
        ...state,
        currentAmountType: action.newAmountType,
      };
    case 'CHANGE_INGREDIENT_AMOUNT':
      return {
        ...state,
        currentIngredientAmount: action.newIngredientAmount,
      };
    default:
      return state;
  }
};

export default ingredientOptions;
