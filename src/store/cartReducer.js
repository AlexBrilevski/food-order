export const CART_ACTION_TYPE = {
  addItem: 'ADD_ITEM',
  updateQuantity: 'UPDATE_QUANTITY',
  removeItem: 'REMOVE_ITEM',
};

export const initCartState = {
  items: [],
};

export const cartReduser = (state = initCartState, action) => {
  switch (action.type) {
    case CART_ACTION_TYPE.addItem: {
      let updatedItems = [...state.items];

      if (updatedItems.find(item => item.id === action.payload.id)) {
        updatedItems = updatedItems.map(item => item.id === action.payload.id ? { ...item, quantity: item.quantity++ } : item);
      } else {
        updatedItems = [...updatedItems, { ...action.payload, quantity: 1 }];
      }

      return { ...state, items: updatedItems };
    }
    case CART_ACTION_TYPE.updateQuantity: {
      return { ...state, items: updatedItems };
    }
    case CART_ACTION_TYPE.removeItem: {
      return { ...state, items: updatedItems };
    }
    default: {
      return state;
    }
  }
}
