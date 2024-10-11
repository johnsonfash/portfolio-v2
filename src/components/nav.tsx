import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import DarkModeToggle from "./toggle"

const Nav = () => {
  return (
    <nav className="top-0 dark:bg-app-black dark:text-white sticky block bg-white py-3 border-b dark:border-b-0 z-50 shadow-sm dark:shadow-none">
      <input type="checkbox" name="hambugger" id="hambugger" className="hidden" />
      <div className="lg:flex hambugger-mate px-6 lg:px-10 transition-all max-h-[370px] justify-between mx-auto items-center max-w-screen-xl overflow-hidden ">
        <div className="w-full lg:w-auto flex items-center justify-between">
          <Link href="" className="inline-block italic">
            <span className="inline-block text-[1.4rem] font-bold">T-D</span>
            <span className="inline-block ">igital</span>
          </Link>
          <label htmlFor="hambugger" className="cursor-pointer lg:hidden select-none text-[1.4rem]">
            <FontAwesomeIcon icon={faBars} />
          </label>
        </div>
        <div className="select-none">
          <Link href='/' className="pr-3 block lg:inline-block md:pr-6 lg:pl-6 py-4">Home</Link>
          <Link href='#about' className="block lg:inline-block  lg:px-6 py-4">About</Link>
          <Link href='#portfolio' className="block lg:inline-block lg:px-6 py-4">Portfolio</Link>
          <Link href='#services' className="block lg:inline-block  lg:px-6 py-4">Services</Link>
        </div>
        <div className="select-none inline-flex flex-wrap items-center">
          <a href="" className="inline-block w-full mt-3 lg:mt-0 lg:w-auto bg-[#4E29C4] text-white rounded-lg py-2 px-4">Hire Us</a>
        <DarkModeToggle/>
        </div>
      </div>
    </nav>
  )
}

export default Nav