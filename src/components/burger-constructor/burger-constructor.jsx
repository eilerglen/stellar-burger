import styles from './burger-constructor.module.css';
import Order from '../order/order';
import IngredientsList from "../ingredient-list/ingredient-list";
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from "react-dnd";
import { ADD_INGREDIENT_BURGER } from '../../services/actions/constructor';
import { Bun } from '../bun/bun';

export default function BurgerConstructor() {
  const dispatch = useDispatch();
  const { bun } = useSelector((store) => store.burgerIngredientsReducer.sortedCart);
  const { fillers } = useSelector((store) => store.burgerIngredientsReducer.sortedCart);

  const[{isHover}, dropRef] = useDrop({
    accept: 'ingredient',
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item) {
      dispatch({
        type: ADD_INGREDIENT_BURGER,
        item: item
      })
    } 
  })
  console.log(fillers)
 
  const border = isHover ? '2px dashed green' : 'none';

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

