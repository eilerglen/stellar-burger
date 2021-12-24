import React  from "react";
import { createPortal } from "react-dom";
import modalStyles from './modal.module.css';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById('modal-root')

export default class Modal extends React.Component {

 render() {
    const {onClose, isOpen} = this.props
    return createPortal (
        <div className ={modalStyles.modal} >
            <h2>{this.props.title}</h2>
            <button className={modalStyles.close} onClick={()=>onClose}>
                <CloseIcon type = 'primary'/>
            </button>
            {this.props.children}
        </div>

    , modalRoot    
    )
 }   
    

}