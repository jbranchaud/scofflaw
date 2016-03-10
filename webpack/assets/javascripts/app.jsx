import React from 'react';
import ReactDOM from 'react-dom';

import NewItemType from './components/new_item_type'

document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('webpack-react-form')) {
    ReactDOM.render(
      <NewItemType />,
      document.getElementById('webpack-react-form')
    );
  }
});
