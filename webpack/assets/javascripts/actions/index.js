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

export const changeIngredientType = ({ newIngredientType, ingredientTypes, ingredientOptions }) => (
  {
    type: "CHANGE_INGREDIENT_TYPE",
    newIngredientType,
    ingredientTypes,
    ingredientOptions,
  }
);
