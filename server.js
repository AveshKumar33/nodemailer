const express=require('express');
const app=express();

// app.get('/',(req,res)=>{
//     res.json({name:"avesh","role":"developer"})
// })
app.get('/sendmail',(req,res)=>{

"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "mail.goahr.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'contracts@goahr.com',// generated ethereal user
      pass: 'AHRc4375!@'// generated ethereal password
    },
    name:"https://app.goahr.com/"
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from:'" send from" <contracts@goahr.com>', // sender address
    to: "katiyaravesh333@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello avesh kaumar are you ready for finish your task", // plain text body
    // html: "<b>Hello world?</b>", // html body
  });
    if(info.messageId){
        res.send("mail send")
    }else{
        res.send("mail not send")
    }


  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);

})

app.listen(3000 ,()=>{
  console.log('server is listing on port no 3000');  
})