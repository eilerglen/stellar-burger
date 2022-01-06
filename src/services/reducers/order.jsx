import {
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
  POST_ORDER_FAILED,
  REMOVE_ORDER,
} from '../actions/order.jsx'

const initialState = {
  order: {},
  isLoading: false,
  hasError: false
}

export const orderReducer = (state = initialState, action) => {
  switch(action.type) {
    case POST_ORDER_REQUEST: {
      return {...state, isLoading: true}
    }
    case POST_ORDER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        hasError: false,
        order: action.order,
      }  
    }
    case POST_ORDER_FAILED: {
      return {...state, isLoading: false, hasError: true}
    }
    case  REMOVE_ORDER: {
      return initialState;
    }
    default: 
      return state;
  }
}