import React from 'react'
import { HashRouter as Router, Link } from 'react-router-dom';

class PageNav extends React.Component {



    render() {
        return (
            <Router>
  <nav>
     <Link to='/'>Home</Link>
  </nav>
            </Router>
        )
    }
}


export default PageNav