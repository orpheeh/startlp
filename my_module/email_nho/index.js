const nodemailer = require('nodemailer');

class MailSender {


    constructor(){
        this.srcEmail = "nho.notification@gmail.com";
        this.password = "ABClotus";
        this.init();
    }

    init() {
      this.transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: this.srcEmail,
          pass: this.password
        }
      });
    }

    async sendEmail(dstEmail, subject, content) {
      let info = await this.transporter.sendMail({
        from:  'Gatax' + ' <' + this.srcEmail + '>',
        to: dstEmail,
        subject: subject,
        html: content
      });
  
      let result = await this.transporter.sendMail(info);
      return result;
    }
  }

  module.exports = new MailSender();