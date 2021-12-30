import {BASEURL} from './constants'

export const getIngredientsData = async () =>  {
  const response = await fetch(`${BASEURL}ingredients`)
  if(!response.ok) {
      throw new Error('Failed response: ' + response)
  }
  const ingredients = await response.json();
  return ingredients.data 
}

export const postOrder = async(arrayId) => {
  const response = await fetch(`${BASEURL}orders`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      ingredients: arrayId
    })
  })
  if (!response.ok) {
    throw new Error ('Fetch error')
  }
  const orderObject = await response.json()
  return orderObject;
  
}