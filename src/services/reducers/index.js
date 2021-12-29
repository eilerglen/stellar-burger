import {combineReducers} from 'redux'
import {ingredientsReducer} from './ingredients'
import {orderReducer} from './orders'

export const rootReducer = combineReducers ({
  ingredientsReducer,
  orderReducer,
})