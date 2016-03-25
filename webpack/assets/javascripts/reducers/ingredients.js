import ingredientOptions from './ingredient_options';

const ingredient = (state, action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return {
        id: action.id,
        ingredientType: state.currentIngredientType,
        name: state.currentIngredientName,
        amountType: state.currentAmountType,
        amount: action.amount,
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
      return {
        ...state,
        addIngredient: ingredientOptions(state.addIngredient, action),
      };
    case "CHANGE_INGREDIENT_NAME":
      return {
        ...state,
        addIngredient: ingredientOptions(state.addIngredient, action),
      };
    case "CHANGE_AMOUNT_TYPE":
      return {
        ...state,
        addIngredient: ingredientOptions(state.addIngredient, action),
      };
    default:
      return state;
  }
};

export default ingredients;
