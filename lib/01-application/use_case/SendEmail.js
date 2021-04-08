module.exports = (dst, subject, html) => {
  var nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nho.notification@gmail.com',
      pass: 'ABClotus'
    }
  });

  var mailOptions = {
    from: 'Gatax<nho.notification@gmail.com>',
    to: dst,
    subject: subject,
    html: html
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}