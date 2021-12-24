import React  from "react";
import detailStyles from './ingredients-details.module.css';

export default class IngredientDetails extends React.Component {
    
 render() {
    
       return (
        <div className={detailStyles.detail}>
            <img src={this.props.ingredientView.image} alt={this.props.ingredientView.name}
            className={detailStyles.image} />
            <h3 className={detailStyles.title}>{this.props.ingredientView.name}</h3>
            <ul className={detailStyles.nutritionlist}>
                <li className={detailStyles.nutritionitem}>
                    <p>Каллории, калл</p>
                    <p>{this.props.ingredientView.calories}</p>

                    
                </li>
                <li className={detailStyles.nutritionitem}>
                    <p>Белки</p>
                    <p>{this.props.ingredientView.proteins}</p>

                </li>
                <li className={detailStyles.nutritionitem}>
                    <p>Жиры</p>
                    <p>{this.props.ingredientView.fat}</p>

                </li>
                <li className={detailStyles.nutritionitem}>
                    <p>Углеводы</p>
                    <p>{this.props.ingredientView.carbohydrates}</p>

                </li>

            </ul>

        </div>
        
    )
 }   
    

}