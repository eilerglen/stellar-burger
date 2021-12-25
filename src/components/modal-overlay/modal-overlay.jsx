import React from 'react';
import stylesOverlay from './modal-overlay.module.css'

export default class ModalOverlay extends React.Component {
  constructor(props) {
    super(props)
    this.overlayRef = React.createRef();
  }

  render() {
    const {onClose} = this.props
    return (
      <div ref={this.overlayRef} className={stylesOverlay.overlay} onClick = {(e) => {
        if(e.target = this.overlayRef.current) {
          this.props.click(e)
        }
      }}></div>
    )  
  }
}