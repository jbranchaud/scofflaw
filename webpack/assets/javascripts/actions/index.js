let nextRecipeId = 0;

export const addIngredient = ({ ingredientType, name, amountType, amount }) => {
  console.log('Adding An Ingredient');
  return {
    type: 'ADD_INGREDIENT',
    id: nextRecipeId++,
    ingredientType,
    name,
    amountType,
    amount,
  };
};
