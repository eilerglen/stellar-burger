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
       return {...state, bun: action.vun}
     }
     case REMOVE_ALL_INGREDIENTS_BURGER: {
       return initialState
     }
  }

}