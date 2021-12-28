import React  from "react";
import { createPortal } from "react-dom";
import modalStyles from './modal.module.css';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";

const modalRoot = document.getElementById('modal-root')

export default function Modal({children, onClose, title, isOpen}) {

const ModalOverlayRef = React.useRef(null);

const handleEscClose = (e) =>{
    if (e.keyCode === 27) {
        onClose(e)
    }
} 

const handleCloseOverlay = (e) => {
    if(e.target === ModalOverlayRef.current) {
        onClose(e)
    }
}

React.useEffect(() => {
    document.addEventListener("keydown", handleEscClose)
    document.addEventListener("click", handleCloseOverlay)
    return ()=> {
        document.removeEventListener("keydown", handleEscClose)
        document.removeEventListener("click", handleCloseOverlay)
    }
})

    return createPortal (
        <>
        <ModalOverlay overlayRef = { ModalOverlayRef} onClose = {onClose}/>
        <div className ={modalStyles.modal} >
            <h2>{title}</h2>
            <button className={modalStyles.close} onClick={onClose}>
                <CloseIcon type = 'primary'/>
            </button>
            {children}
          
        </div>
        </>
    , modalRoot    
    )
    }
    
