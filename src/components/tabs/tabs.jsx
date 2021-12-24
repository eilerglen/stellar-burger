import React from 'react';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import styles from  './tabs.module.css'

export default class Tabs extends React.Component {
  constructor(props) {
    super(props)
    
  }

   changeTabValue (value) {
    const {changeTab} = this.props
    return changeTab(value)
  }
 
  render(){
    const {value} = this.props
    return (
    <div className={styles.tabItems}>
      <Tab value = 'buns' active = {value === 'buns'} className={styles.tabItem} onClick={() => {this.changeTabValue('buns')}}>Булки</Tab>
      <Tab type = 'sauce' active = {value === 'sause'} className={styles.tabItem} onClick ={()=> {this.props.changeTab('sause')}}>Соусы</Tab>
      <Tab type = 'main' active = {value === 'main6'} className={styles.tabItem} onClick ={() => {this.props.changeTab('main')}}>Начинки</Tab>
    </div>
    );
  }

}