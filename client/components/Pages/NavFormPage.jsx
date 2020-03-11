import React from 'react'

import Form from './Form'
import Footer from '../Footer'
import FormPageNav from '../FormPageNav'
import SocialMediaNav from '../SocialMediaNav'

class NavFormPage extends React.Component {



    render() {
        return (
            <React.Fragment>
               <div className="headerPic">
                 <FormPageNav /> 
                 <SocialMediaNav /> 
                 <img src="Images/Deathless-Studio-Form-Logo.png" className="centerImg" id="formLogo"></img>
               <Form />             
              <Footer />  
              </div>  
            </React.Fragment>
        )
    }
}


export default NavFormPage