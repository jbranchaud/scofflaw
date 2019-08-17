import { combineReducers } from 'redux';

import recipe from './recipe';

const recipeApp = combineReducers({
  recipe,
});

export default recipeApp;
