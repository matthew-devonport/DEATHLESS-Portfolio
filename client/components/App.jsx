import React from 'react'
import Header from './Header'
import Portfolio from './Portfolio'
import CommissionWork from './CommissionWork'
import Footer from './Footer'

class App extends React.Component {
 

  render () {
    return (
      <div>
      <Header />
 
      <Portfolio />
      <div className='background' id='backgroundPic'>
      </div>
      <CommissionWork />
      <Footer />
      
      </div>
      
    )
  }
}

export default App
