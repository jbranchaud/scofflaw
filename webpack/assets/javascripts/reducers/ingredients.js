import ingredientOptions from './ingredient_options';

const ingredient = (state, action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return {
        id: action.id,
        ingredientType: state.currentIngredientType,
        name: state.currentIngredientName,
        amountType: state.currentAmountType,
        amount: state.currentIngredientAmount,
      };
    default:
      return state;
  }
};

const ingredients = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return {
        ...state,
        ingredientList: [
          ...state.ingredientList,
          ingredient(state.addIngredient, action),
        ],
      };
    case "CHANGE_INGREDIENT_TYPE":
    case "CHANGE_INGREDIENT_NAME":
    case "CHANGE_AMOUNT_TYPE":
    case "CHANGE_INGREDIENT_AMOUNT":
      return {
        ...state,
        addIngredient: ingredientOptions(state.addIngredient, action),
      };
    default:
      return state;
  }
};

export default ingredients;
