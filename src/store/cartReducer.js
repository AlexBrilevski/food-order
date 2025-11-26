export const CART_ACTION_TYPE = {
  addItem: 'ADD_ITEM',
};

export const cartReduser = (state, action) => {
  switch (action.type) {
    case (CART_ACTION_TYPE.addItem): {
      return { ...state };
    }
    default: {
      return state;
    }
  }
}
