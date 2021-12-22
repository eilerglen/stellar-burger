import React from 'react';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import styles from  './tabs.module.css'

export default class Tabs extends React.Component {
  render(){
    return (
    <div className={styles.tabItems}>
     <div type = 'buns' className={styles.tabItem} onClick ={() => {this.props.changeTab('buns')}}>Булки</div>
      <div type = 'sauce' className={styles.tabItem} onClick ={()=> {this.props.changeTab('sause')}}>Соусы</div>
      <div type = 'main' className={styles.tabItem} onClick ={() => {this.props.changeTab('main')}}>Начинки</div>
    </div>
    );
  }

}