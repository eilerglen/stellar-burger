import React, { useEffect } from "react";
import styles from './ingredient.module.css';
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredients-details/ingredients-details";
import { useSelector, useDispatch } from "react-redux";
import {
    ADD_INGREDIENT_DETAILS,
    REMOVE_INGREDIENT_DETAILS, 
} from '../../services/actions/ingredient-details' 
import { useDrag } from "react-dnd";


export default function Ingredient ({item}) {
  //const [countBun, setCountBun] = React.useState(0)
  const { bun } = useSelector((store) => store.burgerIngredientsReducer.sortedCart);
  const { fillers } = useSelector((store) => store.burgerIngredientsReducer.sortedCart);
  const dispatch = useDispatch()
  const {ingredientDetails} = useSelector(store => store.ingredientDetailsReducer) 
  const [isOpenModal,setIsOpenModal] = React.useState(false)

 
  const countBun = () => {
    if(item.type === 'bun') {
      if(bun._id && item._id === bun._id) {
        return 2
      }
    }
  }
  console.log(countBun)
  const [{opacity}, dragRef] = useDrag({
    type: 'ingredient',
    item: {item}, 
    collect: monitor => ({
      isDrag: monitor.isDragging()? 0.5 : 1
    })
  })

  console.log(bun)
  const openModal = (data) =>{
    dispatch({
      type: ADD_INGREDIENT_DETAILS,
      ingredientDetails: data,
    })
    setIsOpenModal(true)
  }

  const handleClose = (e) =>{
    e.stopPropagation();
    dispatch({
      type: REMOVE_INGREDIENT_DETAILS,
      ingredientDetails: {},
    })
    console.log(ingredientDetails)
    setIsOpenModal(false)

  }



  console.log(fillers)
  const count = () => {
    return fillers.reduce((acc, el) => el.item._id === item._id ? acc + 1 : acc, 0)
  }
  return (  
    <article className={styles.item} key={item._id} onClick = {() => openModal(item) } ref ={dragRef} style={opacity}>
         { <Counter count={item.type === 'bun' ? countBun() > 0 && countBun() : count()} />}
        <picture className={styles.picture}>
            <source media="(max-width: 599px)" srcSet={item.image_mobile} />
            <source media="(min-width: 600px)" srcSet={item.image_large} />
            <img className={styles.image} src={item.image} alt={item.name} />
        </picture>
        <span className={styles.price}>{item.price}&nbsp;<CurrencyIcon type ='primary'/></span>
        <p className={styles.text}>{item.name}</p>
        {isOpenModal && (
          <Modal title = 'Детали ингредиента' isOpen = {isOpenModal} onClose = {handleClose}>
            <IngredientDetails />
          </Modal>
        )}
    </article>
      )
}