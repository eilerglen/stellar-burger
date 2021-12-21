import React from 'react';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import styles from  './tabs.module.css'

export default class Tabs extends React.Component {
  render(){
    
    return (
      <div className={styles.items}>
        <div type = 'bun' className={styles.item} onClick ={() =>{
        }}>Булки</div>
        <div type = 'souce' className={styles.item}>Соусы</div>
        <div type = 'main' className={styles.item}>Начинки</div>
      </div>
    );

  }

}