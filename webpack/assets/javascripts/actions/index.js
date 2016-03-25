let nextRecipeId = 0;

export const addIngredient = ({ amountType, amount }) => {
  return {
    type: 'ADD_INGREDIENT',
    id: nextRecipeId++,
    amountType,
    amount,
  };
};

export const changeIngredientType = ({ newIngredientType }) => (
  {
    type: "CHANGE_INGREDIENT_TYPE",
    newIngredientType,
  }
);

export const changeIngredientName = ({ newIngredientName }) => (
  {
    type: "CHANGE_INGREDIENT_NAME",
    newIngredientName,
  }
);

export const changeAmountType = ({ newAmountType }) => {
  return {
    type: "CHANGE_AMOUNT_TYPE",
    newAmountType,
  }
};
