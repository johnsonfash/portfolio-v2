import Intro from "@/components/intro"
import Nav from "@/components/nav"
import SectionOne from "@/components/secOne"
import SectionThree from "@/components/secThree"
import SectionFour from "@/components/sectionFour"
import SectionTwo from "@/components/sectionTwo"
import { ToastContainer } from 'react-toastify'

const Home = () => {
  return (
    <main >
      <Nav />
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
        <Intro />
      </div>
      <div className="bg-[#F6F4FC]">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionOne />
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionTwo />
        </div>
      </div>
      <div className="bg-[#F6F4FC] relative">
        <div className="absolute bottom-0 right-0 w-[70%] h-[30%] bg-[#4E2AC4]"></div>
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionThree />
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10">
          <SectionFour />
        </div>
      </div>
      <footer className="block border-t">
        <div className="max-w-screen-xl mx-auto py-5 px-6 lg:px-10 font-[500]">
          TDigital - &copy; {new Date().getFullYear()} All Rights Reserved
        </div>
      </footer>
      <ToastContainer />
    </main>
  )
}

export default Home