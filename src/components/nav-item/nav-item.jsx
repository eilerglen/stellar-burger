import React from "react";

import navStyles from './nav-item.module.css'

export default class NavItem extends React.Component {

  render() {
    return (
      <a href = '/' className= {navStyles.link}>

        <span className = {navStyles.icon}> 
          {this.props.children}
        </span>
        
        <p> {this.props.text}</p>
      </a>
      
    )
  }
}