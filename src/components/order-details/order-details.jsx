import React  from "react";
import orderStyles from './order-details.module.css';
import { ReactComponent as OrderDone } from '../../images/order-done.svg';

export default function OrderDetails() {
    return (
      <>
      <span className={orderStyles.order_number}>
        0345497
      </span>
      <span className={orderStyles.subtitle}>идентификатор заказа</span>
      <span className={orderStyles.icon}>
      <OrderDone></OrderDone>
      </span>
      <p className={orderStyles.text}>Ваш заказ начали готовить</p>
      <p className={`${orderStyles.text} ${orderStyles.text_secondary}`}>Дождитесь готовности на орбитальной станции</p>

      </>          
    )
}