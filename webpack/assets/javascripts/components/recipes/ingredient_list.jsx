import React, { PropTypes } from 'react';

const IngredientList = ({ ingredients }) => (
  <div id="ingredient_list">
    <h3>Ingredients</h3>
    <ul>
      {ingredients.map((ingredient) => (
        <li key={ingredient.id}>
          <span>{ingredient.amount} {ingredient.amountType} {ingredient.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

IngredientList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    amountType: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
  })),
};

export default IngredientList;
