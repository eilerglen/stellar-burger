import styles from './burger-constructor.module.css';
import Order from '../order/order';
import IngredientsList from "../ingredient-list/ingredient-list";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients'
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from '../../services/actions/ingredients'

export default function BurgerConstructor() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.allIngredients);

  const total = items.reduce((acc, p) =>acc + p.price, 0)
  const bun = items.find(item => item.type === 'bun')
  const fillers = items.filter(item => item.type !== 'bun')


  return ( 
    <section className={styles.constructor}>
         {bun &&
          <ConstructorElement
            type ='top'
            isLocked = {true}
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image}
          />
          } 
         <div className={styles.scroller}>
                <IngredientsList data={fillers} />
          </div>
          {bun &&  
          <ConstructorElement
            type ='bottom'
            isLocked = {true}
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image}
          />
          }
        <Order bun = {bun} fillers = {fillers} total={total}/> 
    </section>   
  )
}

