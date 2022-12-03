import React from "react"
import ModalStyle from "./ModalStyle"

const Modal = (props) => {
  return (
    <ModalStyle>
      <div>
        <span>modal</span>
        <button onClick={props.modalDownHandler}>Close</button>
      </div>
    </ModalStyle>
  )
}

export default Modal
