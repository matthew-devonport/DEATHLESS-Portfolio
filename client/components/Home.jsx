import React from 'react'
import { HashRouter as Router, Link} from 'react-router-dom';


import CommissionWork from './CommissionWork'
import Footer from './Footer'
import Shop from './Shop'
import Portfolio from './Portfolio';
import HomeNav from './HomeNav'
import SocialMediaNav from './SocialMediaNav';
import Apparel from './Apparel'


class Home extends React.Component {
 

  render () {
    return (
      <React.Fragment>
          <div className='headerPic'>
          <HomeNav />
          <SocialMediaNav />
          <img src="Images/Deathless-Studio-Logo.png" className="centerImg" id="homeLogo"></img>       
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
          <h1>APPAREL</h1>
      <Link to='/apparel'>
            <Apparel />
          </Link>
          <div className='bannerSpace'></div>    
      <h1>DEATHLESS STORE</h1>
      <a href="https://teespring.com/stores/death-inc" target="_blank">
      <Shop />
      </a>
      <div className='bannerSpace'></div>
      <Footer />
      </div> 
      </React.Fragment>
      
    )
  }
}


export default Home