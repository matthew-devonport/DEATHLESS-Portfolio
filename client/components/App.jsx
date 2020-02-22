import React from 'react'
import { HashRouter as Router, Route, Link} from 'react-router-dom';

import Header from './Header'
import CommissionWork from './CommissionWork'
import Footer from './Footer'
import Shop from './Shop'
import PortfolioWorkPage from './Pages/PortfolioWorkPage';
import Home from './Home'

class App extends React.Component {
 

  render () {
    return (
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path="/portfolio" Component={PortfolioWorkPage} />
      </Router>
      
    )
  }
}

export default App
