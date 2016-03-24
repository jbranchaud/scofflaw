import { combineReducers } from 'redux';

import ingredients from './ingredients';
import ingredientOptions from './ingredient_options';

const recipeApp = combineReducers({
  ingredients,
  ingredientOptions,
});

export default recipeApp;
