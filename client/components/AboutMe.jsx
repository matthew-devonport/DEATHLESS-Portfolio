import React from 'react'

import Footer from './Footer'
import AboutMeNav from './AboutMeNav'
import SocialMediaNav from './SocialMediaNav'

class AboutMe extends React.Component {



    render() {
        return (
            <React.Fragment>
          <div className='headerPic'>
              <AboutMeNav />
              <SocialMediaNav />
          <img src="Images/Deathless-Studio-About-Logo.png" className="centerImg" id="aboutLogo"></img>
         <img src="Images/Matt-Parry.jpg" id="parryOne"></img>
         <p className="aboutText">Deathless Studio is created by tattooist/illustrator Matt Parry from Napier NZ.<br /><br /><br />
I have worked with multiple brands and bands from all over the globe. I also illustrate the skate/thrash style artwork for my own clothing line Deathless or Die.<br /><br />
My designs are heavily influenced by 80’s skateboard graphics and band flyers/artwork from legends such as Jimbo Phillips, VCJ, pushead and Ric Clayton.<br /><br />
I am currently taking on commission work, fill out the form on the contact me page!<br /><br /><br />
Thanks for looking!</p>
         
          <Footer />   
              </div>   
            </React.Fragment>
        )
    }
}


export default AboutMe