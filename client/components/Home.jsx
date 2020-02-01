import React from 'react'
import Header from './Header'
import Portfolio from './Portfolio'
import CommissionWork from './CommissionWork'
import Footer from './Footer'

class Home extends React.Component {
 

  render () {
    return (
      <div>
      <Header />
      <h1>PORTFOLIO</h1>
      <Portfolio />
      <div className='background' id='backgroundPic'>
      </div>
      <h1>COMMISSION WORK</h1>
      <CommissionWork />
      <Footer />
      
      </div>
      
    )
  }
}

export default Home