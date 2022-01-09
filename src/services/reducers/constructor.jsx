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
}

export const burgerIngredientsReducer = (state = initialState, action) => {
  switch(action.type) {
    case  ADD_INGREDIENT_BURGER: {
        const item = action.item
        if (item.type === 'bun') {
          return {
            ...state, 
            sortedCart: {
              ...state.sortedCart,
              bun: {item, constructorId: Date.now().toString(36)}
           }
          }
        } else {
          return {
            ...state,
            sortedCart: {
              ...state.sortedCart,
              fillers:[
                ...state.sortedCart.fillers, { item, constructorId: Date.now().toString(36) + Math.random().toString(36).substr(2)}
              ]
            }
          }
         
        }
       
     }
    case REMOVE_ALL_INGREDIENTS_BURGER: {
       return initialState
     }
    case REMOVE_INGREDIENT_BURGER: {
      return {...state, sortedCart: {
        ...state.sortedCart,
            fillers:[
              ...state.sortedCart.fillers
            ].filter((item, index) => index != action.index)

      }}
    }
    default: {
      return state
    }
  }
}