import React from "react";
import styles from './tabs.module.css';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";


export default class Tabs extends React.Component {
  state = {
    tabs: [
      {
        value: 'bun',
        title: 'Булки'

      },
      {
        value: 'sause',
        title: 'Соусы'
      },
      {
        value: 'main',
        title: 'Начинки'
      }
    ],
  };


  render() {
      return (
       <div className={styles.container}>
         <Tab value = "bun" active = {this.value ==='bun'} onClick={(value) => {
            setCurrent(value);
            bunHeadingRef.current.scrollIntoView();
}}>Булки</Tab>
         <Tab value = "sauce" active = {this.value ==='sauce'} onClick={(value) => {
          setCurrent(value);
          bunHeadingRef.current.scrollIntoView();
}}>Соусы</Tab>
         <Tab value = "main" active = {this.value ==='main'} onClick={(value) => {
  setCurrent(value);
  bunHeadingRef.current.scrollIntoView();
}}>Начинки</Tab>
       </div>
      )
  }
}

