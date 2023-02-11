import React from "react";
import ReactDOM from "react-dom";

const OVERLAY_STYLE = {
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  zIndex: 1000,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
function Modal({ open, children }) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <div style={OVERLAY_STYLE}>{children}</div>,
    document.getElementById("modal-portal")
  );
}

export default Modal;
