import Handlebars from 'handlebars';
import type { ContactForm } from './types-interfaces';
import { contactFormInputs } from './constants';

export async function sendMail(
  content: {
    to?: string;
  } & ContactForm,
) {
  //   const currentDir = new URL('.', import.meta.url).pathname
  //   const templatePath = currentDir + '/templates/admin_contact_us.hbs'
  //   const htmlTemplate = await promises.readFile(templatePath, 'utf-8')
  //   const template = Handlebars.compile(templatePath)
  //   const contactDetails: {
  //     label: string
  //     content: string
  //   }[] = []
  //   for (const input of contactFormInputs) {
  //     contactDetails.push({ label: input.label, content: content[input.name] })
  //   }
  //   const htmlToSend = template({
  //     contactDetails,
  //     message: content.message,
  //   })
  //   const data = {
  //     from: import.meta.env.VITE_OFFICE_MAIL,
  //     to: import.meta.env.VITE_OFFICE_MAIL,
  //     subject: 'Contact Us Details',
  //     text: 'Your email client cannot display this email correctly.',
  //     html: htmlToSend,
  //   }
  //   //   const response: MessagesSendResult = await this.mailgunService.createEmail(
  //   //     process.env.MAILGUN_DOMAIN,
  //   //     data,
  //   //   )
  //   const mailgun = new Mailgun(FormData)
  //   const mg = mailgun.client({
  //     username: 'api',
  //     key: import.meta.env.MAILGUN_API_KEY,
  //     url: import.meta.env.MAILGUN_API_URL,
  //   })
  //   await mg.messages.create(import.meta.env.MAILGUN_DOMAIN, data)
  //   const transporter = Mailgun
}
