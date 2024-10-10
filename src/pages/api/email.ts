import { NextApiRequest, NextApiResponse } from "next";
import { SendMailClient } from "zeptomail";

interface EmailRequest {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
}

const sendMail = async (data: EmailRequest) => {
  const url = "api.zeptomail.com/";
  const token = process.env.ZOHO_TOKEN;
  const client = new SendMailClient({ url, token });
  try {
    await client.sendMail({
      "from":
      {
        "address": process.env.EMAIL,
        "name": "John"
      },
      "to":
        [
          {
            "email_address":
            {
              "address": "fashanutosin7@gmail.com",
              "name": "Tosin"
            }
          }
        ],
      "subject": "Message Request",
      "htmlbody": `
      <div>
    <div>First Name: ${data.first_name}</div>
    <div>Last Name: ${data.last_name}</div>
    <div>Phone: ${data.phone}</div>
    <div>Email: ${data.email}</div>
  <div style="margin-top:1rem; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: black;">Message</div>
  <div>${data.message}</div>
 </div>`,
    });
    return true
  } catch {
    return false
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { first_name, last_name, message, phone, email }: EmailRequest = req.body;
    await sendMail({ first_name, last_name, message, phone, email })
    if (!first_name || !last_name || !message || !email) {
      return res.status(400).json({ status: false, message: 'Names, email and message are required.', data: null });
    }
    return res.status(200).json({ status: true, message: 'Email request received successfully.', data: null });
  } else {
    return res.setHeader('Allow', ['POST']).status(405).json({ status: false, message: `Method ${req.method} Not Allowed`, data: null });
  }
}