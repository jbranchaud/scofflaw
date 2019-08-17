import { connect } from 'react-redux';

import NewRecipe from 'components/recipes/new_recipe';

import {
  changeName,
  changeDescription,
} from '../actions';

const mapStateToProps = (state) => {
  return {
    recipe: state.recipe,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleRecipeNameChange: (e) => {
      dispatch(changeName({
        newRecipeName: e.target.value,
      }));
    },
    handleRecipeDescriptionChange: (e) => {
      dispatch(changeDescription({
        newRecipeDescription: e.target.value,
      }));
    },
  };
};

const NewRecipeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRecipe);

export default NewRecipeContainer;
