import React from "react";
import orderStyles from './order.module.css';
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export default class Order extends React.Component {
  state = {
    isOpen: false
  }

  render() {
      return (
       <div className={orderStyles.order}>
         <span>{this.props.total}
         <CurrencyIcon type="primary"/>
         </span>
         <button >Оформить заказ</button>
       </div>
      )
  }
}

