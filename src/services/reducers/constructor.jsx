import {
  ADD_BUN_BURGER,
  ADD_INGREDIENT_BURGER,
  REMOVE_INGREDIENT_BURGER,
} from '../actions/constructor'

const initialState = {
  items: [],
  bun: null,
  quantity: [],
}

export const burgerIngredientsReducer = (state = initialState, action) => {
  switch(action.type) {
     case  ADD_BUN_BURGER: {
       return {...state, bun: action.vun}
     }
  }

}