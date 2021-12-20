import React from "react";
import styles from './burger-ingredients.module.css';
import { Tab, Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Ingredient from '../ingredient/ingredient';


export default class BurgerIngredients extends React.Component {

  render() {
      const bun = this.props.ingredients.filter(ingredient => ingredient.type == 'bun')
      const sause = this.props.ingredients.filter(ingredient => ingredient.type == 'sauce')
      const main = this.props.ingredients.filter(ingredient => ingredient.type == 'main')
      return (  
          <section className={styles.ingredients}>
            <h1 className={styles.title}>Соберите бургер</h1>
    
          <div className={styles.scroller}>
              <h2 className={styles.title}>Булки</h2>
              <div className={styles.items}>
                  {bun.map((ingredient)=>(
                    <Ingredient item = {ingredient} key ={ingredient._id}/>
                  ))}
              </div>
              <h2 className={styles.title}>Соусы</h2>
              <div className={styles.items}>
                  {sause.map((ingredient)=>(
                    <Ingredient item = {ingredient} key ={ingredient._id}/>
                  ))}
              </div>
              <h2 className={styles.title}>Начинки</h2>
              <div className={styles.items}>
                  {main.map((ingredient)=>(
                    <Ingredient item = {ingredient} key ={ingredient._id}/>
                  ))}
              </div>
          </div>
            
        </section>       
      )
  }
}

