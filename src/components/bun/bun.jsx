import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import bunStyles from './bun.module.css';
import {useSelector} from 'react-redux' ;

export const Bun = ({position})=> {
  const { bun } = useSelector((store) => store.burgerIngredientsReducer.sortedCart);
  const positionText = position === 'top' ? '(верх)': '(низ)'
  console.log(bun)
  return (
    <div className={!bun.constructor ? bunStyles.bun_empty : bunStyles.bun}>
    {bun.constructorId
        ? <ConstructorElement
            type={position}
            isLocked={true}
            text={`${bun.item.name} ${positionText}`}
            price={bun.item.price}
            thumbnail={bun.item.image}
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