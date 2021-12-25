import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import styles from './app.module.css';

export default class App extends React.Component {
    state = {
      data: [],
      loading: true,
      hasError: false,
    } 
  
  componentDidMount() {
    fetch("https://norma.nomoreparties.space/api/ingredients")
    .then(res => res.json())
    .then(res => 
      this.setState({data: res.data, loading: false}))
    .catch(e => console.log(e))
  }

  render () {
    const {data} = this.state
    console.log(data)
    return (
      <>
      <AppHeader />
      <div className={styles.wrapper}>
        <BurgerIngredients ingredients={data}/>
        <BurgerConstructor ingredients={data}/>
      </div>
      
      </>
    )
  }
}
