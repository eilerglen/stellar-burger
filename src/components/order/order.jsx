import React from "react";
import orderStyles from './order.module.css';
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

export default class Order extends React.Component {
  state = {
    isOpen: false
  }

  setIsOpenModal() {
    this.setState({
      isOpen: true,
    })
  }

  handleClose(e){
    e.stopPropagation();
    this.setState({
      isOpen: false,
    })
  }

  render() {
      const isOpen = this.state.isOpen
      return (
       <div className={orderStyles.order}>
         <span className={orderStyles.price}>{this.props.total}
         <CurrencyIcon type="primary"/>
         </span>
         <Button onClick={()=>{this.setIsOpenModal()}}>Оформить заказ</Button>
         { isOpen &&
          <Modal isOpen = {isOpen} onClose = {this.handleClose.bind(this)}>
            <OrderDetails/>
          </Modal>

         }
       </div>
      )
  }
}

