import React from 'react'
import { HashRouter as NavLink, Link } from 'react-router-dom';
import PopUpNav from './PopUpNav'


class PortPageNav extends React.Component {
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
<div className="pageNav">
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
      <div className="comNavLinks">
      <ul>
         <div className="gradient"><li><Link to='/'>Home</Link></li></div>
         <div className="gradient"><li><Link to='/Commission'>Commission</Link></li></div>
         <div className="gradient"><li><Link to='/Apparel'>Apparel</Link></li></div>
         <div className="gradient"><li><a href="https://deathlessordie.bigcartel.com/" target="_blank">Shop</a></li></div>
         <div className="gradient"><li><Link to='/Contact'>Contact Me</Link></li></div>
        <div className="gradient"><li><Link to='/About'>About Me</Link></li></div>
          </ul>
          </div>
)  

}
export default PortPageNav
