import React from 'react';
import ReactDOM from 'react-dom';

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
    ReactDOM.render(
      <NewRecipe />,
      document.getElementById('new_recipe')
    );
  }
});
