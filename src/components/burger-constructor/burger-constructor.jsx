import React from "react";
import styles from './burger-constructor.module.css';
import Order from '../order/order';
import IngredientsList from "../ingredient-list/ingredient-list";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";


export default class BurgerConstructor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fillers: this.props.ingredients.filter(item => item.type !== 'bun')
    }
  }

    componentDidMount() {
      const data = this.props.ingredients.filter(item => item.type !== 'bun')
      this.setState({
        fillers: [] 
      })
    }

    componentDidUpdate() {
      
    }
    
  render() {
      const bun = this.props.ingredients.find(item => item.type === 'bun')
      const total = this.props.ingredients.reduce((acc, p) =>acc + p.price, 0)
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
        <Order total={total}/> 
        </section>
        
      )
  }
}

