let nextRecipeId = 0;

export const addIngredient = ({ ingredientType, name, amountType, amount }) => {
  return {
    type: 'ADD_INGREDIENT',
    id: nextRecipeId++,
    ingredientType,
    name,
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