// import React from "react";
// import "../style/modal.css";

// const Modal = ({ show, children, darkMode }) => {
//   if (!show) {
//     return null;
//   }
//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <div className={`modal-content ${darkMode ? "dark-mode" : ""}`}>
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;

import React from "react";
 import "../style/modal.css";
 

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content-view">
        <button className="modal-close" onClick={onClose}></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;


