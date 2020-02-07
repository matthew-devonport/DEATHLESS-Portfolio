import React from "react";

class PopUpBox extends React.Component {
  render() {
    let { togglePopup, children } = this.props;
    return (
      <div id="popup-overlay">
        <div id="popup-content">{children}</div>
        <a id="popup-close" onClick={togglePopup}>
          &times;
        </a>
      </div>
    );
  }
}

export default PopUpBox;
