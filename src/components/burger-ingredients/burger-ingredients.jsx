import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./burger-ingredients.module.css";
import Ingredient from "../ingredient/ingredient";
import Tabs from "../tabs/tabs";
import { getIngredients } from "../../services/actions/ingredients";
import { tabs } from "../../utils/constants";

export default function BurgerIngredients() {

  //setCurrent автоматически при клике на Таб меняет стейт без параметров и аргументов

  const [current, setCurrent] = useState("bun");
  const dispatch = useDispatch();
  const rootRef = React.useRef(null)
  const bunRef = React.useRef(null);
  const sauceRef = React.useRef(null);
  const mainRef = React.useRef(null);

  //получаем все ингредиенты

  React.useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const { items, ingredientsRequest, ingredientsFailed } = useSelector(
    (store) => store.allIngredients
  );

  const bun = items.filter((ingredient) => ingredient.type == "bun");
  const sause = items.filter((ingredient) => ingredient.type == "sauce");
  const main = items.filter((ingredient) => ingredient.type == "main");

  //получаем все ингредиенты
  React.useEffect(() => {
    (current === "bun"
      ? bunRef
      : current === "sauce"
      ? sauceRef
      : mainRef
    ).current.scrollIntoView();
  }, [current]);


  console.log(current);

 

  const handleScroll = () => {
    if(rootRef.current && bunRef.current && sauceRef.current && mainRef.current) {
      const bunDistance = Math.abs(rootRef?.current?.getBoundingClientRect().top - bunRef.current.getBoundingClientRect().top)
      const sauceDistance = Math.abs(rootRef.current.getBoundingClientRect().top - sauceRef.current.getBoundingClientRect().top)
      const mainDistance = Math.abs(rootRef.current.getBoundingClientRect().top - mainRef.current.getBoundingClientRect().top)
      
      const min = Math.min(bunDistance, sauceDistance, mainDistance)
      const activeTab = 
      min === bunDistance ? 'bun' : min === sauceDistance ? 'sauce' : 'main'
      setCurrent(activeTab)
    }
  }
 
  return (
    <section className={styles.ingredients}>
      <h1 className={styles.title}>Соберите бургер</h1>

      <div className={styles.tabItems}>
        <Tabs current={current} onClick={setCurrent} />
      </div>

      <div className={styles.scroller} ref={rootRef} onScroll={handleScroll}>
        <h2 ref={bunRef} className={styles.title}>
          Булки
        </h2>
        <div className={styles.items}>
          {bun.map((ingredient) => (
            <Ingredient item={ingredient} key={ingredient._id} />
          ))}
        </div>
        <h2 ref={sauceRef} className={styles.title}>
          Соусы
        </h2>
        <div className={styles.items}>
          {sause.map((ingredient) => (
            <Ingredient item={ingredient} key={ingredient._id} />
          ))}
        </div>
        <h2 ref={mainRef} className={styles.title}>
          Начинки
        </h2>
        <div className={styles.items}>
          {main.map((ingredient) => (
            <Ingredient item={ingredient} key={ingredient._id} />
          ))}
        </div>
      </div>
    </section>
  );
}
