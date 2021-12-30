import React  from "react";
import store from "../../services/store";
import detailStyles from './ingredients-details.module.css';
import { useSelector } from "react-redux";

export default function IngredientDetails() {
    const ingredientView = useSelector (store => store.ingredientDetailsReducer.ingredientDetails)
       return (
        <div className={detailStyles.detail}>
            <img src={ingredientView.image} alt={ingredientView.name}
            className={detailStyles.image} />
            <h3 className={detailStyles.title}>{ingredientView.name}</h3>
            <ul className={detailStyles.nutritionlist}>
                <li className={detailStyles.nutritionitem}>
                    <p>Каллории, калл</p>
                    <p>{ingredientView.calories}</p>

                    
                </li>
                <li className={detailStyles.nutritionitem}>
                    <p>Белки</p>
                    <p>{ingredientView.proteins}</p>

                </li>
                <li className={detailStyles.nutritionitem}>
                    <p>Жиры</p>
                    <p>{ingredientView.fat}</p>

                </li>
                <li className={detailStyles.nutritionitem}>
                    <p>Углеводы</p>
                    <p>{ingredientView.carbohydrates}</p>

                </li>

            </ul>

        </div>
        
    )
 }   
    

