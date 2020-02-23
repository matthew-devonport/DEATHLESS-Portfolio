import React from 'react'

import Form from './Form'
import Footer from '../Footer'
import FormPageNav from '../FormPageNav'
import SocialMediaNav from '../SocialMediaNav'

class NavFormPage extends React.Component {



    render() {
        return (
            <React.Fragment>
               <div className="pageBackPic">
                 <FormPageNav /> 
                 <SocialMediaNav /> 
                 <img src="IMAGES/Deathless-Studio-Form-Logo.png" className="centerImg" id="formLogo"></img>
               <p className="formTitle">FILL OUT THE FORM BELOW!<br/> <strong>&darr;</strong></p>
               <Form />             
              <Footer />  
              </div>  
            </React.Fragment>
        )
    }
}


export default NavFormPage