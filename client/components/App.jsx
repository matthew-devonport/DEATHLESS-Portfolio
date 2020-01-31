import React from 'react'
import Header from './Header'
import Portfolio from './Portfolio'
import CommissionWork from './CommissionWork'

class App extends React.Component {
 

  render () {
    return (
      <div className='app'>
      <Header />
      <Portfolio />
      <CommissionWork />
      </div>
    )
  }
}

export default App
