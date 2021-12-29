import React, { useEffect, useContext } from "react";
import orderStyles from './order.module.css';
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { postOrder} from '../../utils/api'
import {IngredientsContext} from '../../utils/appContext'

export default function Order({total}) {
  const[isOpen, setOpen] = React.useState(false)
  const [orderNumber, setOrderNumber] = React.useState(0)
  const dataIngredients = useContext(IngredientsContext)

  const bun = dataIngredients.find(item => item.type === 'bun')
  console.log(bun)
  const fillers = dataIngredients.filter(item => item.type !== 'bun')
  console.log(fillers)
  const totalIds = fillers.map(elem => elem._id).concat(bun._id)
  console.log(totalIds)

  const getOrder=()=> {
    postOrder(totalIds)
    .then((res) => {
      setOrderNumber(res.order.number)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const handleOpenModal = () => {
    setOpen(true)
    getOrder()
    console.log(orderNumber)
  }

  const handleCloseModal = () => {
    setOpen(false)
  }

  return (
    <div className={orderStyles.order}>
         <span className={orderStyles.price}>{total}
         <CurrencyIcon type="primary"/>
         </span>
         <Button onClick={ handleOpenModal }>Оформить заказ</Button>
         { isOpen &&
          <Modal isOpen = {isOpen} onClose = {handleCloseModal}>
            <OrderDetails orderNumber = {orderNumber}/>
          </Modal>

         }
    </div>
  )
}

