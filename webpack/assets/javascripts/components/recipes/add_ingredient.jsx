import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { addIngredient } from '../../actions';

import IngredientOptionsContainer from '../../containers/ingredient_options_container';

class AddIngredient extends Component {
  constructor(props) {
    super(props);

    this.handleClickAddIngredient = () => { this.props.dispatch(addIngredient()); };
  }

  render() {
    return (
      <div id="ingredients">
        <h3>Add an ingredient</h3>

        <IngredientOptionsContainer />

        <input
          type="button"
          value="Add Ingredient"
          onClick={this.handleClickAddIngredient}
        />
      </div>
    );
  }
}

AddIngredient.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddIngredient);
