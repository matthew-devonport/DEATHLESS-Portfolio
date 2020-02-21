const mailer = require("nodemailer");

const getEmailData = (name, email, message, type) => {
    let data = null;
    console.log(message)  
            data = {
                from: "Contact Form",
                to: "matthew.devonport.test@gmail.com",
                subject: `Message from the contact form!`,
                html: `${name}, ${email}, ${message}`
              
            }
    return data;
}


 
const sendEmail = (name, email, message, type) => {

    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth: {
            user: "matthew.devonport.test@gmail.com",
            pass: "Happy123!"
        }
    })

    const mail = getEmailData(name, email, message, type)

    smtpTransport.sendMail(mail, function(error, response) {
        if(error) {
            console.log(error)
        } else {
            alert( "Thank you! We will be in touch shortly!")
        }
        smtpTransport.close();
    })


}

module.exports = { sendEmail }