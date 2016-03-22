const ingredient = (state, action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return {
        id: action.id,
        ingredientType: action.ingredientType,
        name: action.name,
        amountType: action.amountType,
        amount: action.amount,
      };
    default:
      return state;
  }
};

const ingredients = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return [
        ...state,
        ingredient(undefined, action),
      ];
    default:
      return state;
  }
};

export default ingredients;
