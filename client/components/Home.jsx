import React from 'react'
import Header from './Header'
import Portfolio from './Portfolio'
import CommissionWork from './CommissionWork'
import Footer from './Footer'
import Shop from './Shop'

class Home extends React.Component {
 

  render () {
    return (
      <div>
      <Header />
      <h1>PORTFOLIO</h1>
      <Portfolio />
      <div className='background' id='backgroundMidPic'>
      </div>
      <h1>COMMISSION WORK</h1>
      <CommissionWork />
      <div className='background' id='backgroundMidPic'>
      </div>
      <h1>DEATHLESS STORE</h1>
      <Shop />
      <div className='background' id='backgroundBottomPic'> 
      </div>
      <Footer />
      
      </div>
      
    )
  }
}

export default Home