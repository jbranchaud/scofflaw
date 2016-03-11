import React from 'react';
import ReactDOM from 'react-dom';

import NewItemType from './components/new_item_type'
import NewRecipe from './components/recipes/new_recipe'

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('webpack-react-form')) {
    ReactDOM.render(
      <NewItemType />,
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
