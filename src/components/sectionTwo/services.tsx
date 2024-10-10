import { faWeebly } from "@fortawesome/free-brands-svg-icons"
import { faMobileAlt, faPaintBrush, faPeopleCarry } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

const Services = () => {
  return (
    <div className="mt-20 pb-10">
      <div className="text-xl mb-6 text-center font-semibold"><span className="inline-block">S</span><span className="inline-block decoration-wavy underline underline-offset-8">ervice</span><span className="inline-block">s</span></div>
      <div className="text-center w-1/2 mb-10 mx-auto">
        We offer a range services including consultation, ui/ux design, SEO services, web, mobile and desktop application development.
      </div>
      <div className="flex items-stretch justify-between">
        <div className="w-[48%] relative shadow-md rounded-sm min-h-full">
          <Image src='/process.jpeg' alt='' className="object-cover w-full h-full" width={1200} height={675} />
          <div className="absolute -bottom-9 -right-[3.5rem]">
            {
              Array(6).fill(0).map((__, i) => {
                return <div className="flex" key={i}>
                  {
                    Array(10).fill(0).map((_, u) => <span key={u} className="inline-block m-1 bg-[#30d5db] h-1 w-1 rounded-full"></span>)
                  }
                </div>
              })
            }
          </div>
        </div>
        <div className="w-[48%] flex flex-wrap">
          <div className="w-[48%] px-4 py-8">
            <span className="inline-flex items-center justify-center bg-slate-400 rounded-md w-12 h-12">
              <FontAwesomeIcon icon={faPaintBrush} />
            </span>
            <div className="font-[600] my-2">UI/UX Design</div>
            <div>Creating user-friendly & visually appealing interfaces.</div>
          </div>
          <div className="w-[48%] px-4 py-8">
            <span className="inline-flex items-center justify-center bg-slate-400 rounded-md w-12 h-12">
              <FontAwesomeIcon icon={faWeebly} />
            </span>
            <div className="font-[600] my-2">Web Development</div>
            <div>Building the client & server side of websites.</div>
          </div>
          <div className="w-[48%] px-4 py-8">
            <span className="inline-flex items-center justify-center bg-slate-400 rounded-md w-12 h-12">
              <FontAwesomeIcon icon={faMobileAlt} />
            </span>
            <div className="font-[600] my-2">Mobile App Development</div>
            <div>Creating apps for both Apple & Android devices.</div>
          </div>
          <div className="w-[48%] px-4 py-8">
            <span className="inline-flex items-center justify-center bg-slate-400 rounded-md w-12 h-12">
              <FontAwesomeIcon icon={faPeopleCarry} />
            </span>
            <div className="font-[600] my-2">Consultation</div>
            <div>Assisting clients in their project goals & audience.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services