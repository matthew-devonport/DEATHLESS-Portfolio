import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom';


import Home from './Home'
import PortfolioWorkPage from './Pages/PortfolioWorkPage';
import CommissionWorkPage from './Pages/CommissionWorkPage';
class App extends React.Component {
 

  render () {
    return (
      <Router>
        <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/portfolio' component={PortfolioWorkPage} />
        <Route exact path ='/commission' component={CommissionWorkPage} />
        </div>
      </Router>
      
    )
  }
}

export default App
