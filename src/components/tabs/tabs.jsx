import React from 'react';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import styles from  './tabs.module.css'

export default function Tabs({current, onClick}) {
  const tabs = [
    {
      value: 'bun',
      title: 'Булки'
    },
    {
      value: 'main',
      title: 'Начинки'
    },
    {
      value: 'sauce',
      title: 'Соусы'
    },
  ]
    return (
    <div className={styles.tabItems}>
      {tabs.map(elem => (
        <Tab
         value = {elem.value}
         key = {elem.value}
         active = {current === elem.value}
         onClick = {onClick}
        >
          {elem.title}  
        </Tab>
      ))
      }
    </div>
    );
  }

