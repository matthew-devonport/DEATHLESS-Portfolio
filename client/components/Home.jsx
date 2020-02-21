import React from 'react'

import Header from './Header'
import Portfolio from './Portfolio'
import CommissionWork from './CommissionWork'
import Footer from './Footer'
import Shop from './Shop'


class Home extends React.Component {
 
  handleClick = pageNum => {
    const { dispatch } = this.props
    dispatch(changePage(pageNum))
  }


  render () {
    return (
      <div>
      <Header />
      <h1>PORTFOLIO</h1>
      <div onClick={() => this.handleClick(1)}>
      <Portfolio />
      </div>
      <div className='background' id='backgroundMidPic'>
      </div>
      <h1>COMMISSION WORK</h1>
      <div onClick={() => this.handleClick(2)}>
      <CommissionWork />
      </div>
      <div className='background' id='backgroundMidPic'>
      </div>
      <h1>DEATHLESS STORE</h1>
      <div onClick={() => this.handleClick(3)}>
      <Shop />
      </div>
      <div className='background' id='backgroundBottomPic'> 
      </div>
      <Footer />
      
      </div>
      
    )
  }
}

export default Home