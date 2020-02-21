const mailer = require("nodemailer");
const { Email } = require("./email_template");


const getEmailData = (template) => {
    let data = null;

    switch (template) {
        case "hello":
            data = {
                from: "Contact Form",
                to: "matthew.devonport.test@gmail.com",
                subject: `Message from the contact form!`,
                html: Email()
            }
            break;

        default:
            data;
    }
    return data;
}


const sendEmail = (to, name, type) => {

    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth: {
            user: "matthew.devonport.test@gmail.com",
            pass: "Happy123!"
        }
    })

    const mail = getEmailData(to, name, type)

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