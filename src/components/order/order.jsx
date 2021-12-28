import React from "react";
import orderStyles from './order.module.css';
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

export default function Order({total}) {
  const[isOpen, setOpen] = React.useState(false)

  const handleOpenModal = () => {
    setOpen(true)
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
            <OrderDetails/>
          </Modal>

         }
    </div>
  )
}

