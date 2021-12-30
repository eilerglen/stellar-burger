import {postOrder} from '../../utils/api'

export const POST_ORDER_REQUEST = 'CREATE_ORDER_REQUEST';
export const POST_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
export const POST_ORDER_FAILED = 'CREATE_ORDER_FAILED';
export const REMOVE_ORDER = 'REMOVE_ORDER';

export function  getOrder(arrayId) {
  return function(dispatch) {
    dispatch({
      type: POST_ORDER_REQUEST,
    })
    postOrder(arrayId)
    .then((res) => {
      dispatch({
        type: POST_ORDER_SUCCESS,
        orderNum: res.order.number
      })
    })
    .catch((error) => {
      dispatch({
        type: POST_ORDER_FAILED,
        error: error,
      })
    })
  }
}