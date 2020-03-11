import React from 'react'
import Axios from 'axios'
import Recaptcha from 'react-recaptcha';


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
       this.handleInputChange = this.handleInputChange.bind(this);
   
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

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })

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

    alert( "Thank you! We will be in touch shortly!")

    

   }



    render() {
        return (
            <React.Fragment>
 <div className="formContainer" id="formScale">
        <form onSubmit={this.handleSubmit} method="post">
     <div className='contact'>
            <h2 className="formTitles">YOUR FULL NAME</h2>
            <input
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            required/> 
            <h2 className="formTitles">EMAIL ADDRESS</h2>
            <input
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            required/> 
        <div id='messageForm'>           
            <h2 className="formTitles">MESSAGE</h2>
            <textarea 
              name='message'
              value={this.state.message}
              onChange={this.handleChange}
            required/>
            </div>
            <div id="newsletterLayout"> 
            <input id="checkbox"
              name='newsletter'
              type='checkbox'
              checked={this.state.newsletter}
              onChange={this.handleInputChange}/>
         <h2 id="newsletter">SIGN UP FOR OUR NEWSLETTER!</h2>
         </div>
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
