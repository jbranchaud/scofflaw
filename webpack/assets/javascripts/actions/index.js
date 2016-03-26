let nextRecipeId = 0;

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
