import { connect } from 'react-redux';

import IngredientList from '../components/recipes/ingredient_list';

const mapStateToProps = (state) => (
  { ingredients: state.ingredients }
);

const mapDispatchToProps = () => ({});

const IngredientListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientList);

export default IngredientListContainer;
