import React from "react";
import navStyles from './nav-item.module.css'

export default function NavItem({children, text}) {
    return (
      <a href = '/' className= {navStyles.link}>

        <span className = {navStyles.icon}> 
          {children}
        </span>
        
        <p>{text}</p>
      </a>
      
    )
}