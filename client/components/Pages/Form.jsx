import React from 'react'
import Axios from 'axios';


class Form extends React.Component {
   constructor(props) {
       super(props);
       super(props);
       this.state = {
         name: '',
         email: '',
         message: ''};
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
   
   }

   handleChange(event) {
    this.setState(
      {[event.target.name]: event.target.value, 
       [event.target.email]: event.target.value,
       [event.target.message]: event.target.value,
       [event.target.newsletter]: event.target.value
       }
      );
  }

   handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      newsletter: this.state.newsletter
    };

    Axios.post("api/v1/sendMail", data)

   }



    render() {
        return (
            <React.Fragment>
<p className="formTitle">ASK ME ABOUT COMMISSION WORK!<br/> <strong>&darr;</strong></p>
 <div className="formContainer" id="formScale">
        <form onSubmit={this.handleSubmit} >
     <div className='contact'>
            <h2 className="formTitles">Your full name</h2>
            <input
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            required/> 
            <h2 className="formTitles">Email Address</h2>
            <input
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            required/> 
        <div id='messageForm'>           
            <h2 className="formTitles">Message</h2>
            <textarea 
              name='message'
              value={this.state.message}
              onChange={this.handleChange}
            required/>
            </div>     
            <input
              name='Yes'
              type='checkbox'
              checked={this.state.newsletter}
              onChange={this.handleInputChange}/>
         <h2 id="newsletter">&nbsp;&uarr; Sign up to our newsletter?</h2>
         <div id='submit-btn' > 
          <input type='submit' value='submit' />
          </div>
          </div>
        </form>
 </div>
            </React.Fragment>
        )
    }
}   

export default Form
