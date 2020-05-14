import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom';


import Home from './Home'
import PortfolioWorkPage from './Pages/PortfolioWorkPage';
import CommissionWorkPage from './Pages/CommissionWorkPage';
import NavFormPage from './Pages/NavFormPage';
import AboutMe from './AboutMe'
import ScrollToTop from './ScrollToTop';
import ApparelPage from './Pages/ApparelPage';

class App extends React.Component {
 

  render () {
    return (
      <Router>
        <div>
        <ScrollToTop />
        <Route exact path='/' component={Home} />
        <Route exact path='/portfolio' component={PortfolioWorkPage} />
        <Route exact path='/commission' component={CommissionWorkPage} />
        <Route exact path='/contact' component={NavFormPage} />
        <Route exact path='/about' component={AboutMe} />
        <Route exact path='/apparel' component={ApparelPage} />
        </div>
      </Router>
    )
  }
}


export default App
