import React, { PropTypes } from 'react';
import Select from 'react-select';

const IngredientOptions =
  ({ ingredientOptions,
     currentIngredientType,
     ingredientTypes,
     currentIngredientName,
     ingredientNames,
     handleIngredientTypeChange,
     handleIngredientNameChange
  }) => {
return (
  <div>
    <label htmlFor="ingredient_type">
      Type
    </label>
    <Select
      name="ingredient_type"
      id="ingredient_type"
      value={currentIngredientType}
      options={ingredientTypes}
      onChange={handleIngredientTypeChange}
    />

    <label htmlFor="ingredient_name">
      Ingredient
    </label>
    <Select
      name="ingredient_name"
      value={currentIngredientName}
      options={ingredientNames}
      onChange={handleIngredientNameChange}
    />
  </div>
);
  }

IngredientOptions.propTypes = {
  ingredientOptions: PropTypes.object,
  currentIngredientType: PropTypes.string,
  ingredientTypes: PropTypes.arrayOf(PropTypes.object),
  currentIngredientName: PropTypes.string,
  ingredientNames: PropTypes.arrayOf(PropTypes.object),
  handleIngredientTypeChange: PropTypes.func.isRequired,
  handleIngredientNameChange: PropTypes.func.isRequired,
};

export default IngredientOptions;
