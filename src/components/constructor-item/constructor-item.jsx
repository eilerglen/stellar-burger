import React from "react";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import { useSelector, useDispatch } from "react-redux";
import styles from './constructor-item.module.css'
import { useDrag } from "react-dnd";
import { useRef } from "react";
import { REMOVE_INGREDIENT_BURGER } from '../../services/actions/constructor';


export const ConstructorItem = ({id, item, type, index}) => {
  const dispatch = useDispatch()
  const { fillers } = useSelector((store) => store.burgerIngredientsReducer.sortedCart);
  const ref = useRef(null)

  const handleRemove = () => {
    dispatch({
      type: REMOVE_INGREDIENT_BURGER,
      index: index,
    })
    
  }
  return (
    <li className = {styles.item_container} ref = {ref}>
      <div className={styles.list-item}>
        <DragIcon type = 'primary'/>
        <ConstructorElement
          type = {type}
          text = {item.name}
          price = {item.price}
          thumbnail={item.image}
          handleClose={handleRemove}
        />
      </div>
    </li>
  )
}