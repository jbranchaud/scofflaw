import React, { PropTypes } from 'react';
import Select from 'react-select';

import FormField from 'components/form_field';

import 'react-select/dist/react-select.css';

const IngredientOptions =
  ({ currentIngredientType,
     ingredientTypes,
     currentIngredientName,
     ingredientNames,
     currentAmountType,
     amountTypes,
     currentIngredientAmount,
     handleIngredientTypeChange,
     handleIngredientNameChange,
     handleAmountTypeChange,
     handleIngredientAmountChange,
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

        <FormField
          label="Amount"
          fieldId="ingredient_amount"
          type="text"
          value={currentIngredientAmount}
          onChange={handleIngredientAmountChange}
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
  currentIngredientAmount: PropTypes.string,

  ingredientTypes: PropTypes.arrayOf(PropTypes.object),
  ingredientNames: PropTypes.arrayOf(PropTypes.object),
  amountTypes: PropTypes.arrayOf(PropTypes.object),

  handleIngredientTypeChange: PropTypes.func.isRequired,
  handleIngredientNameChange: PropTypes.func.isRequired,
  handleAmountTypeChange: PropTypes.func.isRequired,
  handleIngredientAmountChange: PropTypes.func.isRequired,
};

export default IngredientOptions;
