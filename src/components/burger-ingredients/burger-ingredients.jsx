import React, {useContext} from "react";
import styles from './burger-ingredients.module.css';
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Ingredient from '../ingredient/ingredient';
import Tabs from '../tabs/tabs';
import {IngredientsContext} from '../../utils/appContext'

export default function BurgerIngredients() {
  const [currentTab, setCurrentTab] = React.useState('bun')
  const dataIngredients = useContext(IngredientsContext)

    const bunTab = React.useRef(null);
    const sauceTab = React.useRef(null);
    const mainTab = React.useRef(null);;

  React.useEffect(() => {
    (currentTab === 'bun'
        ? bunTab
        : currentTab === 'sauce'
            ? sauceTab
            : mainTab)
        .current.scrollIntoView()
}, [currentTab])

      const bun = dataIngredients.filter(ingredient => ingredient.type == 'bun')
      const sause = dataIngredients.filter(ingredient => ingredient.type == 'sauce')
      const main = dataIngredients.filter(ingredient => ingredient.type == 'main')
      
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

