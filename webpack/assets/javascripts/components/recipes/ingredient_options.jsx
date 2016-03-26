import React, { PropTypes } from 'react';
import Select from 'react-select';

const IngredientOptions =
  ({ currentIngredientType,
     ingredientTypes,
     currentIngredientName,
     ingredientNames,
     currentAmountType,
     amountTypes,
     handleIngredientTypeChange,
     handleIngredientNameChange,
     handleAmountTypeChange,
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

        <label htmlFor="amount_type">
          Amount Type
        </label>
        <Select
          name="amount_type"
          value={currentAmountType}
          options={amountTypes}
          onChange={handleAmountTypeChange}
        />
      </div>
    );
  };

IngredientOptions.propTypes = {
  currentIngredientType: PropTypes.string,
  currentIngredientName: PropTypes.string,
  currentAmountType: PropTypes.string,

  ingredientTypes: PropTypes.arrayOf(PropTypes.object),
  ingredientNames: PropTypes.arrayOf(PropTypes.object),
  amountTypes: PropTypes.arrayOf(PropTypes.object),

  handleIngredientTypeChange: PropTypes.func.isRequired,
  handleIngredientNameChange: PropTypes.func.isRequired,
  handleAmountTypeChange: PropTypes.func.isRequired,
};

export default IngredientOptions;
