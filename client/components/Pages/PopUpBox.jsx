import React from "react"

class PopUpBox extends React.Component {
  render() {
    let { togglePopup, children } = this.props
    return (
      <React.Fragment>
        <div id="popup-overlay">
          <div id="popup-content">
            {/* for reference
              https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891 */}
            {children}
          </div>
          <a id="popup-close" onClick={togglePopup}>
            &times;
          </a>
        </div>
      </React.Fragment>
    )
  }
}

export default PopUpBox
