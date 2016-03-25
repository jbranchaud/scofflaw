import _ from 'lodash';

const ingredientName = (state, action) => {
  switch (action.type) {
    case "CHANGE_INGREDIENT_TYPE":
      const newIngredientName = _.head(_.get(state.options, action.newIngredientType));
      return {
        currentIngredientName: newIngredientName,
      }
    default:
      return state;
  }
};

const ingredientOptions = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_INGREDIENT_TYPE":
      return {
        ...state,
        currentIngredientType: action.newIngredientType,
        ...ingredientName(state, action),
      };
    case "CHANGE_INGREDIENT_NAME":
      return {
        ...state,
        currentIngredientName: action.newIngredientName,
      };
    default:
      return state;
  }
}

export default ingredientOptions;
