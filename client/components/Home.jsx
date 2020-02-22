import React from 'react'
import { HashRouter as Router, Link} from 'react-router-dom';

import Header from './Header'
import CommissionWork from './CommissionWork'
import Footer from './Footer'
import Shop from './Shop'
import Portfolio from './Portfolio';
import HomeNav from './HomeNav'


class Home extends React.Component {
 

  render () {
    return (
      <Router>
          <div className='background headerPic'>
          <HomeNav />
          <img src="IMAGES/Deathless-Studio-Logo.png" className="centerImg"></img>   
              </div>   
      <h1>PORTFOLIO</h1>
          <Link to='/portfolio'>
            <Portfolio />
          </Link>   
      <div className='background' id='backgroundMidPic'>
      </div>
      <h1>COMMISSION WORK</h1>
      <Link to='/commission'>
            <CommissionWork />
          </Link>
      <div className='background' id='backgroundMidPic'>
      </div>
      <h1>DEATHLESS STORE</h1>
      <Shop />
      <div className='background' id='backgroundBottomPic'> 
      </div>
      <Footer />
     
      </Router>
      
    )
  }
}

export default Home