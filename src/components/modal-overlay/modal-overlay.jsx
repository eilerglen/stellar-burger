import React, { useRef } from 'react';
import stylesOverlay from './modal-overlay.module.css'

export default function ModalOverlay ({onclick}) {
 const ModalOverlayRef = useRef(null)
 const handleClick =(e)=> {
   if(e.target === ModalOverlayRef.current) {
    onclick()
   }
 }

  return (
    <div ref={ModalOverlayRef} className={stylesOverlay.overlay} onClick ={handleClick}></div>
  )  
}