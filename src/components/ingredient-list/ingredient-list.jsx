import { ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './ingredient-list.module.css';
import { useSelector } from "react-redux";
import { ConstructorItem } from "../constructor-item/constructor-item";
export default function IngredientsList() {
   const { fillers } = useSelector((store) => store.burgerIngredientsReducer.sortedCart);
  console.log(fillers)
    return ( 
      <ul className={ styles.main_container}>
        {fillers && fillers.map((elem, index) => (
          <ConstructorItem
            key = {elem.constructorId || elem.item._id}
              id = {elem.item._id}
              item = {elem.item}
              type={elem.item.type}
              text={elem.item.name}
              price={elem.item.price}
              thumbnail={elem.item.image}
              index = {index}
            />
          ))
        }
      </ul>
  )
}
