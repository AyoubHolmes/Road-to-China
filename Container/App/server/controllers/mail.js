"use strict";
const nodemailer = require("nodemailer");

const sendMail = async (email) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ayoubboulbaz123@gmail.com',
          pass: 'azerty_@1998'
        }
      });
      
      var mailOptions = {
        from: 'ayoubboulbaz123@gmail.com',
        to: `${email}`,
        subject: 'Road to China: Confirmation email',
        text: 'Application form link: '
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}



module.exports = sendMail;