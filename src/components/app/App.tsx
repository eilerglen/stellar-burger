import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import styles from './app.module.css';

export default function App() {
  const [ingredients, setIngredients] = React.useState([])
  
  React.useEffect(() => {
    async function getIngredients() {
      try {
        const response = await fetch("https://norma.nomoreparties.space/api/ingredients")
        if(!response.ok) {
          throw new Error("Response error")
        }
        const ingredientsData = await response.json();
        setIngredients(ingredientsData.data)

      } catch(e) {
        console.log(e)
      }
      
    }
    getIngredients()
  }, [])

  return (
    <>
      <AppHeader />
      <div className={styles.wrapper}>
        <BurgerIngredients ingredients={ingredients}/>
        <BurgerConstructor ingredients={ingredients}/>
      </div>
      
    </>
    )
  }

