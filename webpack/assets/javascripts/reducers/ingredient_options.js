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
        ingredientTypes: state.ingredientTypes,
        ...ingredientName(state, action),
      };
    default:
      return state;
  }
}

export default ingredientOptions;
