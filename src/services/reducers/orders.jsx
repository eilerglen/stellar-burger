import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
  REMOVE_ORDER,
} from '../actions/order.jsx'

const initialState = {
  currentOrder: {},
  orderRequest: false,
  orderFailed: false
}

export const orderReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_ORDER_REQUEST: {
      return {...state, orderRequest: true}
    }
    case CREATE_ORDER_SUCCESS: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: false,
        currentOrder: action.order,
      }  
    }
    case CREATE_ORDER_FAILED: {
      return {...state, orderRequest: false, orderFailed: true}
    }
    case  REMOVE_ORDER: {
      return initialState;
    }
    default: 
      return state;
  }
}