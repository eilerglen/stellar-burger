import React from "react";
import { ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './ingredient-list.module.css';

export default class IngredientsList extends React.Component {
  constructor(props){
    super(props); 
  }
  
  render() {
      return ( 
        <ul className={ styles.main_container}>
        {this.props.data.map((item) => (
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
}
