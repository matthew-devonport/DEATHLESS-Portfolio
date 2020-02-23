import React from 'react'

import Footer from './Footer'
import AboutMeNav from './AboutMeNav'
import SocialMediaNav from './SocialMediaNav'

class AboutMe extends React.Component {



    render() {
        return (
            <React.Fragment>
          <div className='background headerPic'>
              <AboutMeNav />
              <SocialMediaNav />
          <img src="IMAGES/Deathless-Studio-About-Logo.png" className="centerImg"></img>
         <img src="IMAGES/Matt-Parry.jpg" id="parryOne"></img>
         
         
          <Footer />   
              </div>   
            </React.Fragment>
        )
    }
}


export default AboutMe