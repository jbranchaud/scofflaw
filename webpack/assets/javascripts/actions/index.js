let nextRecipeId = 0;

export const changeName = ({ newRecipeName }) => {
  return {
    type: 'CHANGE_NAME',
    newRecipeName,
  };
};

export const changeDescription = ({ newRecipeDescription }) => {
  return {
    type: 'CHANGE_DESCRIPTION',
    newRecipeDescription,
  };
};

export const addIngredient = () => {
  return {
    type: 'ADD_INGREDIENT',
    id: nextRecipeId++,
  };
};

export const changeIngredientType = ({ newIngredientType }) => {
  return {
    type: 'CHANGE_INGREDIENT_TYPE',
    newIngredientType,
  };
};

export const changeIngredientName = ({ newIngredientName }) => {
  return {
    type: 'CHANGE_INGREDIENT_NAME',
    newIngredientName,
  };
};

export const changeAmountType = ({ newAmountType }) => {
  return {
    type: 'CHANGE_AMOUNT_TYPE',
    newAmountType,
  };
};

export const changeIngredientAmount = ({ newIngredientAmount }) => {
  return {
    type: 'CHANGE_INGREDIENT_AMOUNT',
    newIngredientAmount,
  };
};
