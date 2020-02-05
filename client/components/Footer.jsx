import React from 'react'

class Footer extends React.Component {



    render() {
        return (
            <React.Fragment>
          <div id='footer'>
          <footer>
            <div className="row">
                <div className="col span-1-of-2">
                  <ul className="footer-nav">
                    <li><a href="#">About Me</a></li>
                   </ul>
                </div> 
            </div>
            <div className="row">
             <p className="copyrightText">
                Copyright &copy; 2020 by Matt Parry Illustrations. All rights reserved.
             </p>
            </div> 
        </footer></div>   

          
            </React.Fragment>
        )
    }
}


export default Footer