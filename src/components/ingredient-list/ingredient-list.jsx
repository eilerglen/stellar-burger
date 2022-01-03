import { ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './ingredient-list.module.css';
import { useSelector } from "react-redux";

export default function IngredientsList() {
   const { fillers } = useSelector((store) => store.burgerIngredientsReducer.sortedCart);
  console.log(fillers)
    return ( 
      <ul className={ styles.main_container}>
        {fillers && fillers.map((elem) => (
            <li className={ styles.list_item} key={elem.constructorId}>
               <div className={ styles.item_container}>
                <DragIcon type="primary" />
                <ConstructorElement
                  type={elem.item.type}
                  text={elem.item.name}
                  price={elem.item.price}
                  thumbnail={elem.item.image}
                  
            />
                </div>
            </li>
        ))
        }
      </ul>
  )
}
