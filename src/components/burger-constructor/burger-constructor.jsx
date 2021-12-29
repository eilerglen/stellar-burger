import React, {useContext} from "react";
import styles from './burger-constructor.module.css';
import Order from '../order/order';
import IngredientsList from "../ingredient-list/ingredient-list";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import {IngredientsContext} from '../../utils/appContext'

export default function BurgerConstructor() {
  const dataIngredients = useContext(IngredientsContext)
  const total = dataIngredients.reduce((acc, p) =>acc + p.price, 0)
  const bun = dataIngredients.find(item => item.type === 'bun')
  const fillers = dataIngredients.filter(item => item.type !== 'bun')


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

