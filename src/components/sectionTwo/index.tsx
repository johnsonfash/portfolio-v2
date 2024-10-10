import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { faStopwatch20 } from "@fortawesome/free-solid-svg-icons/faStopwatch20"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Projects from "./projects"
import Services from "./services"

const SectionTwo = () => {
  return (
    <div className="py-10">
      <div className="lg:flex block text-center lg:text-left flex-wrap items-center justify-between">
        <div className="shadow-lg mb-6 lg:mb-0 inline-block mx-auto py-2 px-3 bg-[#FFFAF2] rounded-lg">
          <span className="inline-block mr-2 text-xl text-amber-500"><FontAwesomeIcon icon={faStopwatch20} /></span>
          <span className="inline-block">In Time Projects</span>
        </div>
        <div className="flex flex-wrap items-center text-center">
          <div className="px-6 w-full mb-6 lg:mb-0 lg:w-auto">
            <div className="text-5xl lg:text-3xl font-[600] py-3">6+</div>
            <div className="font-[500] lg:font-[400]">Years of Experience</div>
          </div>
          <div className="px-6 w-full lg:w-auto mb-6 lg:mb-0">
            <div className="text-5xl lg:text-3xl font-[600] py-3">12+</div>
            <div className="font-[500] lg:font-[400]">Projects completed</div>
          </div>
          <div className="px-6 w-full lg:w-auto mb-6 lg:mb-0">
            <div className="text-5xl lg:text-3xl font-[600] py-3">7+</div>
            <div className="font-[500] lg:font-[400]">Happy Clients</div>
          </div>
        </div>
        <div className="lg:flex inline-flex items-center shadow-lg py-2 px-3 bg-[#fffdf9] rounded-lg">
          <span className="inline-flex items-center justify-center rounded-full mr-2 bg-[#33ABFD] text-white w-6 h-6"><FontAwesomeIcon icon={faCheck} /></span>
          <div>
            <div className="font-[600]">Projects Done</div>
            <div className="text-[0.8rem]">Software Developer</div>
          </div>
        </div>
      </div>
      <div className="my-12">
        <div className="text-xl mb-6 text-center font-semibold"><span className="inline-block">P</span><span className="inline-block decoration-wavy underline underline-offset-8">ortfoli</span><span className="inline-block">o</span></div>
        <div className="text-center w-full lg:w-1/2 mx-auto">
          Since the start of the year, we have successfully completed a list of projects listed below.
        </div>
        <Projects />
        <Services />
      </div>
    </div>
  )
}

export default SectionTwo