import React from "react"

class PopUpNav extends React.Component {
  render() {
    let { togglePopup, children } = this.props
    return (
      <React.Fragment>
        <div id="navPopup-overlay">
          <div id="navPopup-content">
            {children}
          </div>
          <a id="navPopup-close" onClick={togglePopup}>
            &times;
          </a>
        </div>
      </React.Fragment>
    )
  }
}

export default PopUpNav