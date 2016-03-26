import { combineReducers } from 'redux';

import ingredients from './ingredients';

const recipeApp = combineReducers({
  ingredients,
});

export default recipeApp;
