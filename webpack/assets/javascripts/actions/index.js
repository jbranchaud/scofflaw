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
