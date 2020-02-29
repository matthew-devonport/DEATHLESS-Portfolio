import React from 'react'
import { HashRouter as Router, Link} from 'react-router-dom';


import CommissionWork from './CommissionWork'
import Footer from './Footer'
import Shop from './Shop'
import Portfolio from './Portfolio';
import HomeNav from './HomeNav'
import SocialMediaNav from './SocialMediaNav';


class Home extends React.Component {
 

  render () {
    return (
      <React.Fragment>
          <div className='headerPic'>
          <HomeNav />
          <SocialMediaNav />
          <img src="IMAGES/Deathless-Studio-Logo.png" className="centerImg" id="homeLogo"></img>              
      <h1>PORTFOLIO</h1>
          <Link to='/portfolio'>
            <Portfolio />
          </Link>   
      <div className='bannerSpace'></div>
      <h1>COMMISSION WORK</h1>
      <Link to='/commission'>
            <CommissionWork />
          </Link>
          <div className='bannerSpace'></div>
      <h1>DEATHLESS STORE</h1>
      <Shop />
      <div className='bannerSpace'></div>
      <Footer />
      </div> 
      </React.Fragment>
      
    )
  }
}

window.addEventListener("load", function() { window. scrollTo(0, 0); });


export default Home