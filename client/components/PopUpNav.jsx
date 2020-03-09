import React from "react"

class PopUpNav extends React.Component {
  render() {
    let { togglePopup, content } = this.props
    return (
      <React.Fragment>
        <div id="navPopup-overlay">
        <a id="navPopup-close" onClick={togglePopup}>≡­­­</a>
          <div id="navPopup-content">
            {content}
            <img id="navPic" src="/Images/Nav-Pic.png"></img>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default PopUpNav