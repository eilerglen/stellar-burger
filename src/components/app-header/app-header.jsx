import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon
} from "@ya.praktikum/react-developer-burger-ui-components"
import styles from "./app-header.module.css"
import NavItem from "../nav-item/nav-item" 

export default  function AppHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className= {styles.menu}>
            <li className= {styles.wrapper}>      
                <NavItem text = "Конструктор" >
                  <BurgerIcon/>
                </NavItem>
                <NavItem text = "Лента заказов">
                  <ListIcon />
                </NavItem>
            </li>
            <li className={styles.logo}> 
            < Logo/>
            </li>

            <li>
            <NavItem text = "Личный кабинет">
              <ProfileIcon />
            </NavItem>
            </li>
        </ul> 
      </nav>
        
    </header>
  )
}