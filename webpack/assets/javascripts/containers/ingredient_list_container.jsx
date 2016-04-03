import { connect } from 'react-redux';

import IngredientList from 'components/recipes/ingredient_list';

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients.ingredientList,
  };
};

const mapDispatchToProps = () => { return {}; };

const IngredientListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientList);

export default IngredientListContainer;
