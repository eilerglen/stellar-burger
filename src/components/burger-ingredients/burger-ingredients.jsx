import React from "react";
import styles from './burger-ingredients.module.css';
import { Tab, Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export default class BurgerIngredients extends React.Component {
  render() {
      return (  
          <section className={styles.ingredients}>
          <div className={styles.tabs}>
            <Tab>Булки</Tab>
            <Tab>Соусы</Tab>
            <Tab>Начинки</Tab>
          </div>
          <div className={styles.items}>
              {this.props.ingredients.map((ingredient)=>(
                  <article className={styles.item} key={ingredient._id}>
                    <img className={styles.image} src={ingredient.image} alt={ingredient.name} />
                  <span className={styles.price}>{ingredient.price}&nbsp;</span>
                  <p className={styles.text}>{ingredient.name}</p>
              </article>
              ))}
          </div>
        </section>       
      )
  }
}

