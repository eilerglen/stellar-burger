import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import styles from './app.module.css';
import {IngredientsContext} from '../../utils/appContext'
import {getIngredientsData} from '../../utils/api'

export default function App() {
  const [ingredients, setIngredients] = React.useState([])
  const [isLoading, setIsLoadind] = React.useState(true)

  React.useEffect(() => {
    getIngredientsData()
    .then(res => {
      console.log(res)
      setIngredients(res)
      setIsLoadind(false);
    })
    .catch((error) => {
      setIsLoadind(false)
    })
  }, [])

  return (
    <>
      <AppHeader />
      <div className={styles.wrapper}>
      <IngredientsContext.Provider value={ingredients}>
        <BurgerIngredients />
        <BurgerConstructor />
      </IngredientsContext.Provider>
      </div>
      
    </>
    )
  }

