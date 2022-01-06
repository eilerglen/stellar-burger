import orderStyles from './order.module.css';
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_ORDER, getOrder} from '../../services/actions/order'
import { REMOVE_ALL_INGREDIENTS_BURGER } from '../../services/actions/constructor'  
import { useModal } from "../../utils/customHooks"; 


export default function Order() {
  const { bun, fillers } = useSelector((store) => store.burgerIngredientsReducer.sortedCart);
  const {order} = useSelector((store) => store.orderReducer);
  const orderNumber = order && order.order && order.order.number
  const dispatch = useDispatch()
  const {openingModal, closingModal} = useModal();
  const itemsArr = fillers.map(elem => elem.item._id)
  const idArray = () => {
  
    const itemsArr = fillers.map(elem => elem.item._id)
   
    if(bun) {
      itemsArr.push(bun._id)
    }
    return itemsArr
  }

  const isDisabled = bun._id && idArray.length > 1 ? true : false;

  const handleOpenModal = () => {
    if(itemsArr ) {
      dispatch(getOrder(idArray()))
      openingModal()
      console.log(fillers)
    }
    
  }

  const handleCloseModal = () => {
    closingModal()
    dispatch({
     type: REMOVE_ORDER,
    })
    dispatch({
      type: REMOVE_ALL_INGREDIENTS_BURGER,
     })

  }

  const countTotal = () => {
    const total = bun.price 
  ? (fillers.reduce((acc, p) => acc + p.item.price + bun.price*2))
  : (fillers.reduce((acc, p) => acc + p.item.price, 0));
    return total
  }
  
  return (
    <div className={orderStyles.order}>
         <span className={orderStyles.price}>
         {countTotal}&nbsp;<CurrencyIcon type="primary"/>
         </span>
         <Button onClick={ handleOpenModal }>Оформить заказ</Button>
         {  orderNumber &&
          <Modal onClose = {handleCloseModal}>
            <OrderDetails order = { orderNumber }/>
          </Modal>

         }
    </div>
  )
}
