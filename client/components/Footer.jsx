import React from 'react'
import { HashRouter as NavLink, Link } from 'react-router-dom';

class Footer extends React.Component {



    render() {
        return (
            <React.Fragment>
          <div id='footer'>
          <footer>
                  <ul className="footer-nav">
        <div className="gradient"><li><Link to='/'>Home</Link></li></div>
        <div className="gradient"><li><Link to='/Portfolio'>Portfolio</Link></li></div>
         <div className="gradient"><li><Link to='/Commission'>Commission</Link></li></div>
         <div className="gradient"><li><Link to='/Shop'>Shop</Link></li></div>
        <div className="gradient"><li><Link to='/Contact'>Contact Me</Link></li></div>
        <div className="gradient"><li><Link to='/About'>About Me</Link></li></div>
                   </ul>
             <p className="copyrightText">
                Copyright &copy; 2020 by Deathless Studio. All rights reserved.<br />
                <a href="https://github.com/matthew-devonport" target="_blank" id="orangeText">Website Design &amp; Build by Matthew Devonport</a>
             </p> 
        </footer>
        </div>  
          
            </React.Fragment>
        )
    }
}


export default Footer