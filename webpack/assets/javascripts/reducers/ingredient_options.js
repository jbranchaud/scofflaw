import _ from 'lodash';

const ingredientName = (state, action) => {
  switch (action.type) {
    case "CHANGE_INGREDIENT_TYPE":
      const newIngredientName = _.head(_.get(state.ingredientOptions, action.newIngredientType));
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
        ingredientOptions: state.ingredientOptions,
        currentIngredientType: action.newIngredientType,
        ...ingredientName(state, action),
      };
    case "CHANGE_INGREDIENT_NAME":
      return {
        ingredientOptions: state.ingredientOptions,
        currentIngredientType: state.currentIngredientType,
        currentIngredientName: action.newIngredientName
      };
    default:
      return state;
  }
}

export default ingredientOptions;
