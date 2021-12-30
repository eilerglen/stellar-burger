import React  from "react";
import orderStyles from './order-details.module.css';
import { ReactComponent as OrderDone } from '../../images/order-done.svg';
import { useSelector } from "react-redux";

export default function OrderDetails() {
    const order = useSelector((state) => state.orderReducer.orderNum)

    return (
      <>
      <span className={orderStyles.order_number}>
       {order}
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