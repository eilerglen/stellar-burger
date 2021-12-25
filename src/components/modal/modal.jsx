import React  from "react";
import { createPortal } from "react-dom";
import modalStyles from './modal.module.css';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";

const modalRoot = document.getElementById('modal-root')

export default class Modal extends React.Component {

handleEscClose(e) {
    if (e.keyCode === 27) {
        this.props.onClose(e)
    }
}    


componentDidMount() {
    document.addEventListener("keydown", this.handleEscClose.bind(this))

    
}

componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEscClose)
}

render() {
    const {onClose, isOpen} = this.props
    return createPortal (
        <>
        <ModalOverlay click = {onClose}/>
        <div className ={modalStyles.modal} >
            <h2>{this.props.title}</h2>
            <button className={modalStyles.close} onClick={onClose}>
                <CloseIcon type = 'primary'/>
            </button>
            {this.props.children}
          
        </div>
        </>
    , modalRoot    
    )
}   
    

}