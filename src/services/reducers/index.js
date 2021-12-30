import {combineReducers} from 'redux'
import {allIngredients} from './ingredients'
import {orderReducer} from './orders'

export const rootReducer = combineReducers ({
  allIngredients,
  orderReducer,
})