import React from "react";
import styles from './ingredient.module.css';
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import IngredientDetails  from "../ingredients-details/ingredients-details";

export default class Ingredient extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      ingredientView: {},
      isOpenModal: false
    }
  }

  setIsOpenModal(data) {
    this.setState({
      isOpenModal: true,
      ingredientView: data,
    })
  }

  handleClose(e){
    e.stopPropagation();
    this.setState({
      isOpenModal: false,
      ingredientView: {}
    })

  }
  render() {
    const isOpen = this.state.isOpenModal;
    const dataView = this.state.ingredientView
      return (  
        <article className={styles.item} key={this.props.item._id} 
        onClick = {() =>{this.setIsOpenModal(this.props.item)} }>
          {console.log(this.state.isOpenModal)}
          {console.log(this.state.ingredientView)}
        <picture className={styles.picture}>
            <source media="(max-width: 599px)" srcSet={this.props.item.image_mobile} />
            <source media="(min-width: 600px)" srcSet={this.props.item.image_large} />
            <img className={styles.image} src={this.props.item.image} alt={this.props.item.name} />
        </picture>
        <span className={styles.price}>{this.props.item.price}&nbsp;</span>
        <p className={styles.text}>{this.props.item.name}</p>
        {this.state.isOpenModal && (
          <Modal title = 'Детали ингредиента' isOpen = {isOpen} onClose = {this.handleClose}>
            <IngredientDetails ingredientView = {dataView}/>
          </Modal>
        )}
    </article>
      )
  }

}