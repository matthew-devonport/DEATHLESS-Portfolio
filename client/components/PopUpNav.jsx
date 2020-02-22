import React from "react"

class PopUpNav extends React.Component {
  render() {
    let { togglePopup, content } = this.props
    return (
      <React.Fragment>
        <div id="navPopup-overlay">
        <a id="navPopup-close" onClick={togglePopup}>
            &times;
          </a>
          <div id="navPopup-content">
            {content}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default PopUpNav