import React from "react";
import styles from './ingredient.module.css';
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import IngredientDetails  from "../ingredients-details/ingredients-details";

export default function Ingredient ({item}) {

  const [isOpenModal,setIsOpenModal] = React.useState(false)
  const [ingredientView, setIngredientView] = React.useState({})

  const openModal = (data) =>{
   setIngredientView(data)
   setIsOpenModal(true)
  }

  const handleClose = (e) =>{
    e.stopPropagation();
    setIsOpenModal(false)
  }

  return (  
    <article className={styles.item} key={item._id} onClick = {() => openModal(item) }>
        <picture className={styles.picture}>
            <source media="(max-width: 599px)" srcSet={item.image_mobile} />
            <source media="(min-width: 600px)" srcSet={item.image_large} />
            <img className={styles.image} src={item.image} alt={item.name} />
        </picture>
        <span className={styles.price}>{item.price}&nbsp;<CurrencyIcon type ='primary'/></span>
        <p className={styles.text}>{item.name}</p>
        {isOpenModal && (
          <Modal title = 'Детали ингредиента' isOpen = {isOpenModal} onClose = {handleClose}>
            <IngredientDetails ingredientView = {ingredientView}/>
          </Modal>
        )}
    </article>
      )
}