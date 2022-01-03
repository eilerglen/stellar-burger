import { ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './ingredient-list.module.css';
import { useSelector } from "react-redux";

export default function IngredientsList() {
   const { fillers } = useSelector((store) => store.burgerIngredientsReducer.sortedCart);

    return ( 
      <ul className={ styles.main_container}>
        {fillers && fillers.map((item) => (
            <li className={ styles.list_item} key={item._id}>
               <div className={ styles.item_container}>
                <DragIcon type="primary" />
                <ConstructorElement
                  type={null}
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
            />
                </div>
            </li>
        ))
        }
      </ul>
  )
}
