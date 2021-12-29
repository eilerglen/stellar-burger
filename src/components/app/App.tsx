import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import styles from './app.module.css';

export default function App() {
  return (
    <>
      <AppHeader />
      <div className={styles.wrapper}>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
      
    </>
    )
  }

