import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configure_store';

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
      ingredients: {
        ingredientList: [],
        addIngredient: {
          options: {
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
          amountTypes: [
            'ounce',
            'slice',
            'to taste',
          ],
          currentIngredientType: "liquor",
          currentIngredientName: "bourbon",
          currentAmountType: "ounce",
        },
      },
    };
    let store = configureStore(initialState);

    ReactDOM.render(
      <Provider store={store}>
        <NewRecipe />
      </Provider>,
      document.getElementById('new_recipe')
    );
  }
});
