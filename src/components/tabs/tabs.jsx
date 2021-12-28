import React from 'react';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import styles from  './tabs.module.css'

export default function Tabs({value, onClick}) {
    return (
    <div className={styles.tabItems}>
      <Tab value = 'buns' active={value === 'buns'} className={styles.tabItem} onClick={onClick}>Булки</Tab>
      <Tab value = 'sauce' active={value === 'sause'} className={styles.tabItem} onClick={onClick}>Соусы</Tab>
      <Tab value = 'main' active={value === 'main6'} className={styles.tabItem} onClick={onClick}>Начинки</Tab>
    </div>
    );
  }

