import styles from './burger-constructor.module.css';
import Order from '../order/order';
import IngredientsList from "../ingredient-list/ingredient-list";
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from "react-dnd";
import { ADD_INGREDIENT_BURGER } from '../../services/actions/constructor';
import { Bun } from '../bun/bun';

export default function BurgerConstructor() {

  const dispatch = useDispatch();
  const[{isHover, handlerId}, dropRef] = useDrop({
    accept: 'ingredient',
    collect: (monitor, connect) => ({
      isHover: monitor.isOver(),
      handlerId: monitor.getHandlerId(),
      itemId: monitor.getItem()
    }),
    drop(item) {
      dispatch({
        type: ADD_INGREDIENT_BURGER,
        item: item
      })
      console.log(handlerId)
    } 
  })


  const border = isHover ? '5px solid green' : 'none';

  return ( 
    <section className={styles.constructor} ref = {dropRef} style={{ border }} >
        <Bun position ="top" ></Bun>
         <div className={styles.scroller}>
                <IngredientsList  />
          </div>
          <Bun position ="bottom" ></Bun>
        <Order /> 
    </section>   
  )
}

