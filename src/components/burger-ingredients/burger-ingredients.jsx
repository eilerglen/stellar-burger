import React from "react";
import styles from './burger-ingredients.module.css';
import { Tab, Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Ingredient from '../ingredient/ingredient';
import Tabs from '../tabs/tabs';

export default class BurgerIngredients extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: null,
    }
    this.bunTab = React.createRef();
    this.sauceTab = React.createRef();
    this.mainTab = React.createRef();
  }

  toggleTab(currentValue) {
    this.setState({
      value: currentValue
    })
  }
   componentDidMount () {
     
    this.state.value = 'buns';
  
   }

   componentDidUpdate(prevProps, prevState) {
    this.state.value === 'buns'
      ? this.bunTab.current.scrollIntoView()
      : this.state.value === 'sause'
        ? this.sauceTab.current.scrollIntoView()
        : this.mainTab.current.scrollIntoView()
  }

  render() {
      const bun = this.props.ingredients.filter(ingredient => ingredient.type == 'bun')
      const sause = this.props.ingredients.filter(ingredient => ingredient.type == 'sauce')
      const main = this.props.ingredients.filter(ingredient => ingredient.type == 'main')

      const bunTab = this.bunTab
      const sauceTab = this.sauceTab
      const mainTab = this.mainTab 
      return (  
        <section className={styles.ingredients}>
            <h1 className={styles.title}>Соберите бургер</h1>
            <div className={styles.tabItems}>
              <Tabs value = {this.value} onclick = {this.toggleTab.bind(this)}/> 
              {/* <div type = 'buns' className={styles.tabItem} 
              onClick ={() =>{this.toggleTab('buns')}}>Булки</div>

              <div type = 'sauce' className={styles.tabItem} 
              onClick ={() =>{this.toggleTab('sauce')
             }}>Соусы</div>

              <div type = 'main' className={styles.tabItem} 
              onClick ={() =>{this.toggleTab('main')}}>Начинки</div>
            </div> */}
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
}

