import React from 'react'
import Home from './Home'
import CommissionWorkPage from './Pages/CommissionWorkPage'
import PortfolioWorkPage from './Pages/PortfolioWorkPage'
import Form from '../components/Pages/Form'
class App extends React.Component {
 

  render () {
    return (
      <div>
      {/* <Home /> */}
      <CommissionWorkPage />
      {/* <PortfolioWorkPage /> */}
      </div>
      
    )
  }
}

export default App
