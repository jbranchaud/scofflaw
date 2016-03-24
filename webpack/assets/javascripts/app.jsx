import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import recipeApp from './reducers';

import NewIngredientType from './components/new_ingredient_type';
import NewRecipe from './components/recipes/new_recipe';

import '../stylesheets/app.css';

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('webpack-react-form')) {
    ReactDOM.render(
      <NewIngredientType />,
      document.getElementById('webpack-react-form')
    );
  }

  if (document.getElementById('new_recipe')) {
    const initialState = {
      ingredients: [],
      ingredientOptions: {
        ingredientOptions: {
          liquor: [
            'bourbon',
            'gin',
            'vodka',
          ],
          fruit: [
            'orange',
            'lemon',
            'lime',
          ],
        },
        currentIngredientType: "liquor",
        currentIngredientName: "bourbon",
      },
    };
    let store = createStore(recipeApp, initialState);

    ReactDOM.render(
      <Provider store={store}>
        <NewRecipe />
      </Provider>,
      document.getElementById('new_recipe')
    );
  }
});
