import emailjs from 'emailjs-com';
require('dotenv').config()
const serviceID = process.env.REACT_APP_SERVICE_ID
const userID = process.env.REACT_APP_USER_ID

const sendEmail = (templateParams)  => {
        emailjs.send(serviceID,templateParams.template, templateParams, userID)
            .then((result) => {
            // console.log(result.text, result.status,templateParams, "Success!")
        }, (error) => {
          // console.log(error, "error");
      });
}
  
export default sendEmail