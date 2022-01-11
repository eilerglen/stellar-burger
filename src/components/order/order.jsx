import orderStyles from "./order.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_ORDER, getOrder } from "../../services/actions/order";
import { REMOVE_ALL_INGREDIENTS_BURGER } from "../../services/actions/constructor";
import { useModal } from "../../utils/customHooks";
import { useEffect, useMemo, useState } from "react";

export default function Order() {
  const [total, setTotal] = useState(0);
  const { bun, fillers } = useSelector(
    (store) => store.burgerIngredientsReducer.sortedCart
  );
  const { order } = useSelector((store) => store.orderReducer);
  const orderNumber = order && order.order && order.order.number;
  const dispatch = useDispatch();
  const { openingModal, closingModal } = useModal();

  //Создаем массив из ID
  const idArray = useMemo(() => {
    const itemsArr = fillers.map((elem) => elem.item._id);
    if (bun._id) {
      itemsArr.push(bun._id);
    }
    return itemsArr;
  }, [fillers, bun]);

  //Флаг активации и деактивации кнопки

  const isDisabled = bun._id && idArray.length > 1 ? true : false;

  //Считаем итоговую стоимость в конструкторе
  useEffect(() => {
    bun && bun.price
      ? setTotal(
          fillers.reduce((acc, p) => acc + p.item.price, 0) + bun.price * 2
        )
      : setTotal(fillers.reduce((acc, p) => acc + p.item.price, 0));
  }, [bun, fillers]);
  //Отправляем массив ID на сервер и получаем сгенерированный номер заказа
  const handleOpenModal = () => {
    if (idArray) {
      dispatch(getOrder(idArray));
      openingModal();
      console.log(fillers);
    }
  };
  //Очищаем стейт ордера и стейт конструктора
  const handleCloseModal = () => {
    closingModal();
    dispatch({
      type: REMOVE_ORDER,
    });
    dispatch({
      type: REMOVE_ALL_INGREDIENTS_BURGER,
    });
  };

  return (
    <div className={orderStyles.order}>
      <span className={orderStyles.price}>
        {total}&nbsp;
        <CurrencyIcon type="primary" />
      </span>
      <Button
        disabled={!isDisabled ? "disabled" : ""}
        onClick={handleOpenModal}
      >
        Оформить заказ
      </Button>
      {orderNumber && (
        <Modal onClose={handleCloseModal}>
          <OrderDetails order={orderNumber} />
        </Modal>
      )}
    </div>
  );
}
