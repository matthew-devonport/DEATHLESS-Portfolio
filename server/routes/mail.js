const mailer = require("nodemailer");

const getEmailData = (name, email, message, newsletter) => {
    let data = null;

    if (newsletter === true) {
       newsletterChecked = "Yes"
    } else { 
        newsletterChecked = "No"
    }

            data = {
                from: "Contact Form",
                to: "matthew.devonport.test@gmail.com",
                subject: `Message from the contact form!`,
                html: `<b>From:</b>&nbsp;${name}
                      <br><br><b>Email:</b>&nbsp;${email}
                      <br><br><b>Message:</b>&nbsp;${message}
                      <br><br><b>Newsletter:</b>&nbsp;${newsletterChecked}`
            }
    return data;
}


 
const sendEmail = (name, email, message, newsletter) => {

    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth: {
            user: "matthew.devonport.test@gmail.com",
            pass: "Happy123!"
        }
    })

    const mail = getEmailData(name, email, message, newsletter)

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