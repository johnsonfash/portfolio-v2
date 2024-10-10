import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const Nav = () => {
  return (
    <nav className="top-0 sticky block bg-white py-3 border-b z-50 shadow-sm">
      <input type="checkbox" name="hambugger" id="hambugger" className="hidden" />
      <div className="lg:flex hambugger-mate px-6 lg:px-10 transition-all max-h-[300px] justify-between mx-auto items-center max-w-screen-xl overflow-hidden ">
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
          <Link href='#portfolio' className="block lg:inline-block lg:px-6 py-4">Portfolio</Link>
          <Link href='#about' className="block lg:inline-block  lg:px-6 py-4">About</Link>
          <Link href='#team' className="block lg:inline-block  lg:px-6 py-4">Team</Link>
        </div>
        <div className="select-none">
          <a href="" className="inline-block bg-[#4E29C4] text-white rounded-lg py-2 px-4">Hire Us</a>
        </div>
      </div>
    </nav>
  )
}

export default Nav