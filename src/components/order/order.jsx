import React from "react";
import orderStyles from './burger-constructor.module.css';

export default class Order extends React.Component {
  render() {
      return (
       <div className={orderStyles.order}>
         <span> total</span>
         <button>Оформить заказ</button>
       </div>
      )
  }
}

