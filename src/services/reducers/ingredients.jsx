import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from '../actions/ingredients'

const initialState = {
  items: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
}

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {...state, ingredientsRequest: true}
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ingredientsRequest: false,
        ingredientsFailed: false,
        items: action.items,
      }
    }
    case GET_INGREDIENTS_FAILED: {
      return {
        ...state, ingredientsRequest: false, ingredientsFailed: true
      }
    }
    default: 
      return state;
  }
}