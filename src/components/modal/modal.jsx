import React  from "react";
import { createPortal } from "react-dom";
import modalStyles from './modal.module.css';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";

const modalRoot = document.getElementById('modal-root')

export default function Modal({onClose}) {

const handleEscClose = (e) =>{
    if (e.keyCode === 27) {
        this.props.onClose(e)
    }
}    

React.useEffect(() => {
    document.addEventListener("keydown", handleEscClose)
    return ()=> {
        document.addEventListener("keydown", handleEscClose)
    }
})

    return createPortal (
        <>
        <ModalOverlay onClick = {onClose}/>
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
    
