import { faGithub, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"

const Intro = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row  py-10 justify-between items-center">
      <div className="w-full lg:w-1/2 pr-[10%]">
        <div className="text-lg font-[500]">
          👋 Hi, I&apos;m Johnson Fash
        </div>
        <h3 className="text-4xl font-semibold mt-4 mb-6">Software <span className="inline-block decoration-wavy underline underline-offset-4">Dev</span>eloper</h3>
        <div>
          I use code to interprete complex problem into simple solutions for my clients.
        </div>
        <div className="py-4">
          <span className="inline-block text-slate-700 mr-3 py-2">Contact Me</span>
          <span>
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
          </span>
        </div>
        <div>
          <Link href='' className="inline-block bg-[#4E29C4] text-white rounded-lg py-2 px-4">Book a Meeting</Link>
        </div>
      </div>
      <div className="w-full sm:w-2/3 mx-auto mb-10 lg:mb-0 lg:w-1/2">
        <Image src='/image-cover.png' alt='' width={700} height={600} />
      </div>
    </section>
  )
}

export default Intro