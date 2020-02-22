import React from 'react'
import { HashRouter as Router, Link} from 'react-router-dom';

import Header from './Header'
import CommissionWork from './CommissionWork'
import Footer from './Footer'
import Shop from './Shop'
import Portfolio from './Portfolio';



class Home extends React.Component {
 

  render () {
    return (
      <Router>
      <Header />
      <h1>PORTFOLIO</h1>
        <div className="portfolioPic">
          <Link to='/portfolio'>
            <Portfolio />
          </Link>
        </div>
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