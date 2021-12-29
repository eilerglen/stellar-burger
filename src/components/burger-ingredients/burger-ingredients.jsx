import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import styles from './burger-ingredients.module.css';
import Ingredient from '../ingredient/ingredient';
import Tabs from '../tabs/tabs';
import { getIngredients } from '../../services/actions/ingredients'
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
} from '../../services/actions/ingredients'

export default function BurgerIngredients() {
  const [currentTab, setCurrentTab] = React.useState('bun')
  const dispatch = useDispatch();

  const bunTab = React.useRef(null);
  const sauceTab = React.useRef(null);
  const mainTab = React.useRef(null);;

  React.useEffect(() => {
    dispatch(getIngredients)
  }, [dispatch])

  const ingredients = useSelector((store) => store.ingredients.items);


      const bun = ingredients.filter(ingredient => ingredient.type == 'bun')
      const sause = ingredients.filter(ingredient => ingredient.type == 'sauce')
      const main = ingredients.filter(ingredient => ingredient.type == 'main')
      
      return (  
        <section className={styles.ingredients}>
            <h1 className={styles.title}>Соберите бургер</h1>

            <div className={styles.tabItems}>
              <Tabs current = {currentTab} onClick = {setCurrentTab}/> 
            </div>

            <div className={styles.scroller}>
              <h2 ref={bunTab} className={styles.title}>Булки</h2>
              <div className={styles.items} >
                  {bun.map((ingredient)=>(
                    <Ingredient item = {ingredient} key ={ingredient._id}/>
                  ))}
              </div>
              <h2 ref={sauceTab} className={styles.title}>Соусы</h2>
              <div className={styles.items} >
                  {sause.map((ingredient)=>(
                    <Ingredient item = {ingredient} key ={ingredient._id}/>
                  ))}
              </div>
              <h2 ref={mainTab} className={styles.title}>Начинки</h2>
              <div  className={styles.items} >
                  {main.map((ingredient)=>(
                    <Ingredient item = {ingredient} key ={ingredient._id}/>
                  ))}
              </div>
            </div>
            
        </section>       
      )
}

