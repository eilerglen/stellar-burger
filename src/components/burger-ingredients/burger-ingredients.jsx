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
    
    console.log(this.state.value)

   }

   componentDidUpdate(prevProps, prevState) {
    console.log('Jsx update')
    console.log(this.state.value)
  }

  render() {
      const bun = this.props.ingredients.filter(ingredient => ingredient.type == 'bun')
      const sause = this.props.ingredients.filter(ingredient => ingredient.type == 'sauce')
      const main = this.props.ingredients.filter(ingredient => ingredient.type == 'main')
      const currentTab = this.state.value; 
      const bunTab = this.bunTab
      const sauceTab = this.sauceTab
      const mainTab = this.mainTab 
      return (  
        <section className={styles.ingredients}>
            <h1 className={styles.title}>Соберите бургер</h1>
            <div className={styles.tabItems}>
              <div type = 'buns' className={styles.tabItem} onClick ={() =>{
                this.toggleTab('buns')
                console.log(currentTab)
                console.log(bunTab)
                this.bunTab.current.scrollIntoView()
              }}>Булки</div>

              <div type = 'sauce' className={styles.tabItem} onClick ={() =>{
                this.toggleTab('sauce')
                console.log(currentTab)
                console.log(sauceTab)
                this.sauceTab.current.scrollIntoView()}}>Соусы</div>

              <div type = 'main' className={styles.tabItem} onClick ={() =>{
                 this.toggleTab('main')
                 console.log(currentTab)
                 console.log(mainTab)
                 this.mainTab.current.scrollIntoView()}}>Начинки</div>
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

