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
         message: '',
        isVerified: false};
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleInputChange = this.handleInputChange.bind(this);
       this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
       this.verifyCallback = this.verifyCallback.bind(this);
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

  recaptchaLoaded () {
    console.log('capcha successfully loaded')
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
if (this.state.isVerified) {
    alert("Thank you! We will be in touch shortly!")
} else {
    alert("Please verify that you are a human!")
}   
   }

verifyCallback(response) {
if (response) {
  this.setState({
    isVerified: true
  })
  
}
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
        
         <Recaptcha
    sitekey="6Ldbn_YUAAAAAGnyLvSza74_rph-zXLm5CfF9CnT"
    render="explicit"
    verifyCallback={this.verifyCallback}
    recaptchaLoaded={this.recaptchaLoaded}
  />
         <div id='submit-btn' > 
          <input type='submit' value='SUBMIT' />
          </div>
          </div>
        </form>
 </div>
            </React.Fragment>
        )
    }
}   

export default Form
