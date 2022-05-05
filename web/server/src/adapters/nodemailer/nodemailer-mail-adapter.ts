import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f41feb2cff9e71",
      pass: "c5ad170468ed06"
    }
});

export class NodemailMailAdapter implements MailAdapter{
    async sendMail ({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Igor Neves <yigorneves@gmail.com>',
            subject,
            html: body,
        });

    };
}