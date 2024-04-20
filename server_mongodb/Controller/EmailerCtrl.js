import nodemailer from "nodemailer";
export default class EmailCtrl {
  static _instance;
  static get instance() {
    if (!this._instance) this._instance = new EmailCtrl();
    return this._instance;
  }
  transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: InfoMail.host,
      port: InfoMail.port,
      secure: false, // Use `true` for port 465, `false` for all other ports (587)
      auth: {
        user: InfoMail.userSendMail,
        pass: InfoMail.passSendMail,
      },
    });
  }

  async sendMail(content, toUser) {
    try {
      await this.transporter.sendMail({
        from: `${InfoMail.userSendMail}`, // sender address
        to: toUser, // list of receivers
        subject: `Mail sended by ${InfoMail.userSendMail}`, // Subject line
        text: `${content}`, // plain text body
        // html: "<b>Hello world? 123</b>", // html body
      });
      return true;
    } catch (err) {
      return false;
    }
  }
}

const InfoMail = {
  userSendMail: "duongnn@yunero.io",
  passSendMail: "lqfckxabhegvsurc",
  port: 587,
  host: "smtp.gmail.com",
};
