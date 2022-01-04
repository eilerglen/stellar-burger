import {
  ADD_BUN_BURGER,
  ADD_INGREDIENT_BURGER,
  REMOVE_INGREDIENT_BURGER,
  REMOVE_ALL_INGREDIENTS_BURGER,
} from '../actions/constructor'

const initialState = {
  sortedCart: {
    bun: {},
    fillers: [],
  },
  counts: {},
}

export const burgerIngredientsReducer = (state = initialState, action) => {
  switch(action.type) {
    case  ADD_INGREDIENT_BURGER: {
        const item = action.item
        if (item.type === 'bun') {
          const bunId = state.sortedCart.bun._id;
          state.sortedCart.bun = item
        } else {
          const newFillers = [...state.sortedCart.fillers,{ item, constructorId: Date.now().toString(36) + Math.random().toString(36).substr(2)}]
          state.sortedCart.fillers = newFillers
        }
       return {...state, bun: action.bun}
     }
    case REMOVE_ALL_INGREDIENTS_BURGER: {
       return initialState
     }
    case  REMOVE_INGREDIENT_BURGER: {
      const itemIndex = action.id
      const newFillers = [...state.sortedCart.fillers]
      newFillers.splice(itemIndex, 1)
      state.sortedCart.fillers = newFillers
     }
    default: {
      return state
    }
  }
}