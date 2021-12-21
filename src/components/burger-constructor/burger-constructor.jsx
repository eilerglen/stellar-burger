import React from "react";
import styles from './burger-constructor.module.css';

export default class BurgerConstructor extends React.Component {

  render() {
      return (
        <section className={styles.constructor}
        >
        <Order/>
        </section>
        
      )
  }
}

