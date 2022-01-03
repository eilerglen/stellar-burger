import {combineReducers} from 'redux'
import {allIngredients} from './ingredients'
import {ingredientDetailsReducer} from './ingredient-detail'
import {orderReducer} from './order'
import { burgerIngredientsReducer } from './constructor'

export const rootReducer = combineReducers ({
  allIngredients,
  ingredientDetailsReducer,
  orderReducer,
  burgerIngredientsReducer,
})