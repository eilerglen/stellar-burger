import React from "react";
import styles from './burger-constructor.module.css';
import Order from '../order/order';
import IngredientsList from "../ingredient-list/ingredient-list";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";


export default class BurgerConstructor extends React.Component {
  constructor(props){
    super(props);
    
  }
  render() {
      const bun = this.props.ingredients.find(item => item.type === 'bun')
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
                <IngredientsList data={this.props.ingredients.filter(item => item.type !== 'bun')} />
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
        <Order/> 
        </section>
        
      )
  }
}

