import { Component } from "react";
import { createPortal } from "react-dom/cjs/react-dom.development";
import style from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = (event) => {
    if (event.code === "Escape") {
      this.props.toggleModal();
    }
  };

  handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.toggleModal();
    }
  };

  render() {
    return createPortal(
      <div className={style.Overlay} onClick={this.handleBackdropClick}>
        <div className={style.Modal}>
          <img src={this.props.image} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
