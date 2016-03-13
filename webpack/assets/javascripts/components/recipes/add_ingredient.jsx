import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import _ from 'lodash';

import '../../../../../node_modules/react-select/dist/react-select.css';

class AddIngredient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIngredientType: _.head(this.ingredientTypes())
    }
  }

  static propTypes = {
    ingredientOptions: PropTypes.shape({
      ingredientType: PropTypes.arrayOf(PropTypes.string),
    }),
  }

  static defaultProps = {
    ingredientOptions: {},
  }

  ingredientTypes() {
    return _.keys(this.props.ingredientOptions);
  }

  ingredientNames() {
    return props.ingredientOptions[this.state.currentIngrdientType]
  }

  ingredientTypeSelectOptions() {
    return this.ingredientTypes().map((ingredientType) => {
      return { value: ingredientType, label: ingredientType };
    });
  }

  handleIngredientTypeChange(selection) {
    this.setState({ currentIngredientType: selection.value });
  }

  render() {
    return (
      <div id='ingredients'>
        <Select
          name='ingredient_type'
          value={this.state.currentIngredientType}
          options={this.ingredientTypeSelectOptions()}
          onChange={this.handleIngredientTypeChange.bind(this)}
        />
      </div>
    );
  }
}

export default AddIngredient;
