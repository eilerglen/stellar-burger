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
 
export default function Order({total}) {

  const dispatch = useDispatch()
  const[isOpen, setOpen] = React.useState(false)

  const {items} = useSelector((state) => state.allIngredients);
  const order = useSelector((state) => state.orderReducer.orderNum)
  //console.log(order)
  const bun = items.find(item => item.type === 'bun')
  const fillers = items.filter(item => item.type !== 'bun')
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
         <span className={orderStyles.price}>{total}
         <CurrencyIcon type="primary"/>
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

