import React from 'react'

import Form from './Form'
import PagesHeader from './PagesHeader'
import Footer from '../Footer'

class NavFormPage extends React.Component {



    render() {
        return (
            <React.Fragment>
               <div className="pageBackPic">
               <PagesHeader />
               <p className="formTitle">FILL OUT THE FORM BELOW!<br/> <strong>&darr;</strong></p>
               <Form /> 
             
             
              <Footer />  
              </div>  
            </React.Fragment>
        )
    }
}


export default NavFormPage