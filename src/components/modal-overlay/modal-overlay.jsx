import stylesOverlay from './modal-overlay.module.css'

export default function ModalOverlay ({overlayRef}) {
 
  return (
    <div ref={overlayRef} className={stylesOverlay.overlay}></div>
  )  
}