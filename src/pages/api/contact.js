import FormData from 'form-data'
import Mailgun from 'mailgun.js';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = '80b6ed093679db9947e6d00270532f23-ee16bf1a-d6147cb1'
const DOMAIN = 'sandbox46d49e2cb44d467c99842e48113d282e.mailgun.org'

export default async function handler(
  req,
  res
) {
  console.log('Data', req.body)

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({ username: 'api', key: API_KEY })

  const { name, email, message } = req.body

  const messageData = {
    from: 'Contact Form <contact@elbaymalik.site>',
    to: 'elbay.malik@gmail.com',
    subject: 'New Contact Form!',
    text: `Hello,

    You have a new form entry from: ${name} ${email}.

    ${message}
    `,
  }

  try {
    const emailRes = await client.messages.create(DOMAIN, messageData)
    console.log(emailRes)
  } catch (err) {
    console.error('Error sending email', err)
  }

  res.status(200).json({ submitted: true })
}