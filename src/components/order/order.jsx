import React, { useEffect } from "react";
import orderStyles from './order.module.css';
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { useSelector, useDispatch } from 'react-redux';
import {POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
  POST_ORDER_FAILED,
  REMOVE_ORDER, getOrder} from '../../services/actions/order'
 
export default function Order() {
  const { bun } = useSelector((store) => store.burgerIngredientsReducer.sortedCart);
  const { fillers } = useSelector((store) => store.burgerIngredientsReducer.sortedCart);
  const countTotal = () => {
    const total = bun.price 
  ? (fillers.reduce((acc, p) => acc + p.item.price + bun.price*2))
  : (fillers.reduce((acc, p) => acc + p.item.price, 0));
    return total
  }
  

  const dispatch = useDispatch()
  const[isOpen, setOpen] = React.useState(false)
  const order = useSelector((state) => state.orderReducer.orderNum)
  //console.log(order)
  const totalIds = fillers.map(elem => elem._id) //.concat(bun._id)
  const handleOpenModal = () => {
    if(totalIds) {
      dispatch(getOrder(totalIds))
      setOpen(true)
      console.log(order)
    }
    
  }

 
  const handleCloseModal = () => {
    setOpen(false)
    dispatch({
     type: REMOVE_ORDER,
    })
  }

  return (
    <div className={orderStyles.order}>
         <span className={orderStyles.price}>
          {console.log(countTotal)}<CurrencyIcon type="primary"/>
          {countTotal}
         </span>
         <Button onClick={ handleOpenModal }>Оформить заказ</Button>
         { isOpen &&
          <Modal isOpen = {isOpen} onClose = {handleCloseModal}>
            <OrderDetails />
          </Modal>

         }
    </div>
  )
}

