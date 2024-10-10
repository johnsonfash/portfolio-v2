import { faGithub, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useState } from "react"
import { toast } from "react-toastify"
import Input from "./input"
import TextArea from "./textarea"

const SectionFour = () => {
  const [loading, setloading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      first_name: e.target?.first_name?.value,
      last_name: e.target?.last_name?.value,
      email: e.target?.email?.value,
      phone: e.target?.phone?.value,
      message: e.target?.message?.value,
    }
    setloading(true)
    const res = await submit(data);
    if (res.status) {
      toast.success('🦄 Wow so easy!');
    } else {
      toast.error('🦄 Wow so easy!');
    }
    setloading(false);
  }

  const submit = async (data: Record<string, any>) => {
    try {
      const res = await fetch('', { body: JSON.stringify(data), method: 'post' });
      return await res.json() as { data: any, status: boolean, message: string }
    } catch (error: any) {
      return { status: false, message: error.message, data: null }
    }
  }

  return (
    <div className="py-16">
      <div className="text-xl mb-6 text-center font-semibold"><span className="inline-block">C</span><span className="inline-block decoration-wavy underline underline-offset-8">ontact U</span><span className="inline-block">s</span></div>
      <div className="text-center w-1/2 mb-12 mx-auto">Got a project? Let's talk.</div>
      <div className="flex justify-between">
        <div className="w-[38%]">
          <div className="text-[0.9rem]">CONTACT INFO</div>
          <div className="text-3xl mb-4 font-[500]">Get in touch</div>
          <div className="flex">
            <div className="inline-block mr-2 text-app-purple"><FontAwesomeIcon icon={faEnvelope} /></div>
            <div className="inline-block">
              <div className="text-[0.8rem]">Talk to us:</div>
              <a className="block" href="mailto:johnfash@tdigital.ng">johnfash@tdigital.ng</a>
            </div>
          </div>
          <div className="flex mt-3">
            <div className="inline-block mr-2 text-app-purple"><FontAwesomeIcon icon={faPhone} /></div>
            <div className="inline-block">
              <div className="text-[0.8rem]">Call us:</div>
              <a className="block" href="tel:+2349036723177">+2349036723177</a>
            </div>
          </div>
          <div className="flex mt-3">
            <div className="inline-block mr-2 text-app-purple"><FontAwesomeIcon icon={faPhone} /></div>
            <div className="inline-block">
              <div className="text-[0.8rem]">Address:</div>
              <div>No 40, Paradise Estate, Lekki-Ajah Lagos Nigeria</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="text-[0.9rem]">FOLLOW US</div>
            <div className="flex">
              <Link href='https://linkedin.com/in/johnfash' className="py-2 inline-block px-3">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
              <Link href='https://github.com/johnsonfash' className="py-2 inline-block px-3">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <a href="https://wa.me/+2349036723177?text=I'm%20interested%20in%building%a%new%20project" className="py-2 inline-block px-3">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <Link href='https://instagram.com/john_fash' className="py-2 inline-block px-3">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="w-[58%] block">
          <div className="flex justify-between">
            <div className="w-[48%]">
              <label className="block mb-2">First Name*</label>
              <Input disabled={loading} required name="first_name" placeholder="Your first name" />
            </div>
            <div className="w-[48%]">
              <label className="block mb-2 tex">Last Name*</label>
              <Input disabled={loading} required name="last_name" placeholder="Your last name" />
            </div>
          </div>
          <div className="flex mt-3 justify-between">
            <div className="w-[48%]">
              <label className="block mb-2">Email*</label>
              <Input disabled={loading} type="email" name="email" placeholder="Your working email" />
            </div>
            <div className="w-[48%]">
              <label className="block mb-2">Phone</label>
              <Input disabled={loading} type="number" name="phone" placeholder="Your phone number" className="[-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none" />
            </div>
          </div>
          <div className="mt-3">
            <label className="block mb-2">Message*</label>
            <TextArea disabled={loading} name="message" required className="resize-none" />
          </div>
          <div className="mt-3">
            <button disabled={loading} type="submit" className="bg-app-purple min-w-64 flex justify-center items-center py-2 px-12 text-white rounded-md">
              {
                loading ?
                  <span className="inline-flex animate-spin items-center justify-center relative w-6 h-6 rounded-full bg-white">
                    <span className="inline-flex items-center justify-center relative w-5 h-5 rounded-full bg-app-purple">
                    </span>
                    <span className="inline-flex w-[0.2rem] h-[0.125rem] bg-app-purple absolute bottom-0 "></span>
                  </span> :
                  <span>Send a message</span>
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SectionFour