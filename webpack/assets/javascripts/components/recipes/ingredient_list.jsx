import React, { PropTypes } from 'react';
import _map from 'lodash/map';

import _ from 'lodash/wrapperLodash';
import _mixin from 'lodash/mixin';
import inflector from 'lodash-inflection';

const IngredientList = ({ ingredients }) => {
  _mixin(_, inflector);

  const ingredientDisplayNames = _map(ingredients, ({ id, amount, amountType, name }) => {
    return (
      <li key={id}>
        <span>{amount} {_.pluralize(amountType, amount)} {name}</span>
      </li>
    );
  });

  return (
    <div id="ingredient_list">
      <h3>Ingredients</h3>
      <ul>
        { ingredientDisplayNames }
      </ul>
    </div>
  );
};

IngredientList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    amountType: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
  })),
};

export default IngredientList;
