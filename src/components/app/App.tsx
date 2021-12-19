import React from 'react';
import './App.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import './App.css';
import { data } from "../../utils/data";

export default class App extends React.Component {
  render () {
    return (
      <>
      <AppHeader />
      <div ></div>
      <BurgerIngredients ingredients= {data}/>
      </>
    )
  }
}
