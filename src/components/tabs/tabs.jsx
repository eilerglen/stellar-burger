import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from "./tabs.module.css";
import { tabs } from "../../utils/constants";

export default function Tabs({ current, onClick }) {
  //setCurrent автоматически при клике на Таб меняет стейт без параметров и аргументов

  return (
    <div className={styles.tabItems}>
      {tabs.map((elem) => (
        <Tab
          value={elem.value}
          key={elem.value}
          active={current === elem.value}
          onClick={onClick}
        >
          {elem.title}
        </Tab>
      ))}
    </div>
  );
}
