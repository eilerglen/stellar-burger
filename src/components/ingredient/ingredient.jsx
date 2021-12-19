import React from "react";
import styles from './ingredient.module.css';
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export default class Ingredient extends React.Component {
  render() {
      return (  
        <article className={styles.item} key={this.props.item._id}>
        <picture className={styles.picture}>
            <source media="(max-width: 599px)" srcSet={this.props.item.image_mobile} />
            <source media="(min-width: 600px)" srcSet={this.props.item.image_large} />
            <img className={styles.image} src={this.props.item.image} alt={this.props.item.name} />
        </picture>
        <span className={styles.price}>{this.props.item.price}&nbsp;</span>
        <p className={styles.text}>{this.props.item.name}</p>
    </article>
      )
  }

}