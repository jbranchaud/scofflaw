import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { addIngredient } from 'actions';

import IngredientOptionsContainer from 'containers/ingredient_options_container';

const AddIngredient = ({ dispatch }) => {
  const handleClickAddIngredient = () => {
    dispatch(addIngredient());
  };

  return (
    <div id="ingredients">
      <h3>Add an ingredient</h3>

      <IngredientOptionsContainer />

      <input
        type="button"
        value="Add Ingredient"
        onClick={handleClickAddIngredient}
      />
    </div>
  );
};

AddIngredient.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddIngredient);
