import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import bunStyles from './bun.module.css';
import {useSelector} from 'react-redux' ;

export const Bun = ({position})=> {
  const { bun } = useSelector((store) => store.burgerIngredientsReducer.sortedCart);
  const isEmpty = !bun._id
  const positionText = position === 'top' ? '(верх)': '(низ)'

  return (
    <div className={isEmpty ? bunStyles.bun_empty : bunStyles.bun}>
    {!isEmpty 
        ? <ConstructorElement
            type={position}
            isLocked={true}
            text={`${bun.name} ${positionText}`}
            price={bun.price}
            thumbnail={bun.image}
        />
        :
        <ConstructorElement
            type={position}
            text={"Место для аппетитной булки"}
        />

    }
</div>
  )
}