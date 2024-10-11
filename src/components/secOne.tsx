import { faDropbox } from "@fortawesome/free-brands-svg-icons"
import { faComputer, faEnvelope, faPaintBrush, faScroll } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SectionOne = () => {
  return (
    <div className="py-16">
      <div className="text-xl mb-10 text-center font-semibold"><span className="inline-block">A</span><span className="inline-block decoration-wavy underline underline-offset-8">bout U</span><span className="inline-block">S</span></div>
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full flex items-center lg:block lg:w-1/4">
          <div className="text-9xl font-[500]">6+</div>
          <div className="ml-4 lg:ml-0 font-[500] lg:font-[400]">Years Working Experience</div>
        </div>
        <div className="w-full lg:w-3/4">
          <div>At TDigital, we run an agile team of designers and developer to carry your project to completion.
            We are passionate about your product and how we can serve you through our 1-1 consultation and more.
          </div>
          <a href="mailto:johnfash@tdigital.ng" className="font-semibold inline-block mt-3 mb-4"><span className="inline-block mr-1"><FontAwesomeIcon icon={faEnvelope} /></span> johnfash@tdigital.ng</a>
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-[32%] mb-10 md:mb-0 bg-white dark:bg-app-black shadow-md rounded-lg p-6 text-center">
              <span className="inline-flex dark:text-black items-center justify-center rounded-full bg-[#E5FAFA] w-12 h-12">
                <FontAwesomeIcon icon={faPaintBrush} />
              </span>
              <div className="font-semibold my-2">UI/UX Design</div>
              <div>
                Research, strategize, create mockup and user focused design to meet your needs.
              </div>
            </div>
            <div className="w-full md:w-[32%] mb-10 md:mb-0 bg-white dark:bg-app-black shadow-md rounded-lg p-6 text-center">
              <span className="inline-flex dark:text-black items-center justify-center rounded-full bg-[#ECEAF9] w-12 h-12">
                <FontAwesomeIcon icon={faComputer} />
              </span>
              <div className="font-semibold my-2">Programming</div>
              <div>
                Converting UI/UX into clean functional code, testing and optimization.
              </div>
            </div>
            <div className="w-full md:w-[32%] bg-white dark:bg-app-black shadow-md rounded-lg p-6 text-center">
              <span className="inline-flex dark:text-black items-center justify-center rounded-full bg-[#FFEEEE] w-12 h-12">
                <FontAwesomeIcon icon={faDropbox} />
              </span>
              <div className="font-semibold my-2">Project Submission</div>
              <div>
                Continuous test/version control and deployment of final codebase and app.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionOne