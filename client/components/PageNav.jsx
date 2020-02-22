import React from 'react'
import { HashRouter as NavLink, Link } from 'react-router-dom';
import PopUpNav from './PopUpNav'





class PageNav extends React.Component {
    state = {
        popupIsShowing: false,
      }
      
    popupContent = ''

    togglePopup = () => {
        this.setState({
          popupIsShowing: !this.state.popupIsShowing
        })
      }   
    
    render() {
        return (
            <div>
<div id="comNav">
<a onClick={() => this.setPopup(this.comNav)}>≡­­­</a>
</div>
{this.state.popupIsShowing && <PopUpNav content={this.popupContent} togglePopup={this.togglePopup}/>}
</div>
        )          
}


setPopup = (content) => {
    this.togglePopup(),
      this.popupContent = content

}

comNav = (
      <div id="comNavLinks">
      <ul>
         <div className="gradient"><li><Link to='/'>Home</Link></li></div>
         <div className="gradient"><li><Link to='/Portfolio'>Portfolio</Link></li></div>
         <div className="gradient"><li><Link to='/Shop'>Shop</Link></li></div>
          </ul>
          </div>
)
  

}
export default PageNav

