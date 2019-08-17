import ingredients from './ingredients';

const recipe = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.newRecipeName,
      };
    case 'CHANGE_DESCRIPTION':
      return {
        ...state,
        description: action.newRecipeDescription,
      };
    case 'ADD_INGREDIENT':
    case 'CHANGE_INGREDIENT_TYPE':
    case 'CHANGE_INGREDIENT_NAME':
    case 'CHANGE_AMOUNT_TYPE':
    case 'CHANGE_INGREDIENT_AMOUNT':
      return {
        ...state,
        ingredients: ingredients(state.ingredients, action),
      };
    default:
      return state;
  }
};

export default recipe;
