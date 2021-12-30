import {combineReducers} from 'redux'
import {allIngredients} from './ingredients'
import {ingredientDetailsReducer} from './ingredient-detail'
import {orderReducer} from './order'

export const rootReducer = combineReducers ({
  allIngredients,
  ingredientDetailsReducer,
  orderReducer,
})