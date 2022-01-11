import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import styles from './constructor-item.module.css'
import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";
import { REMOVE_INGREDIENT_BURGER, MOVE_INGREDIENT_BURGER } from '../../services/actions/constructor';

export const ConstructorItem = ({id, item, type, index}) => {
  const dispatch = useDispatch()
  const ref = useRef(null)
  console.log(index)
  
  const handleRemove = () => {
    dispatch({
      type: REMOVE_INGREDIENT_BURGER,
      index: index,
    })
    
  }
  //Drop ингредиента в бургег-конструкторе
  const [{dragIndex, dropIndex, hoverBoundingRect, hoverCenter,  clientOffset},  dropRef] = useDrop({
    accept: "sort",
    hover(item, monitor) {

      const dragIndex = item.index
      const hoverIndex = index
    
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddle = (hoverBoundingRect.bottom - hoverBoundingRect.top)/2 
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset.y - hoverBoundingRect.top

      if(dragIndex < hoverIndex && hoverClientY < hoverMiddle) return
      if(dragIndex > hoverIndex && hoverClientY > hoverMiddle) return


      dispatch({
        type: MOVE_INGREDIENT_BURGER,
        dragIndex: dragIndex,
        hoverIndex: hoverIndex
      })
      item.index = hoverIndex
    },
  
  })
  const [ , dragRef] = useDrag({
    type: "sort",
    item: { index },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  })

  dragRef(ref)
  dropRef(ref)

  return (
    <li className = {styles.item_container} ref = {ref}>
      <div className={styles.list-item}>
        <DragIcon type = 'primary'/>
        <ConstructorElement
          type = {type}
          text = {item.name}
          price = {item.price}
          thumbnail={item.image}
          handleClose={handleRemove}
        />
      </div>
    </li>
  )
}