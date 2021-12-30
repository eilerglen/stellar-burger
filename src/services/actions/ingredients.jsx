import { getIngredientsData } from '../../utils/api'

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export function getIngredients() {
  return function (dispatch) {
    dispatch ({
      type: GET_INGREDIENTS_REQUEST
    })
    getIngredientsData()
    .then((data) => {
      dispatch ({
        type: GET_INGREDIENTS_SUCCESS,
        items: data
        })
    })  
      .catch((err) => {
        dispatch({
          type: GET_INGREDIENTS_FAILED,
          error: err
        })
    })
  }
}