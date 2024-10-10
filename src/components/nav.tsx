import Link from "next/link"

const Nav = () => {
  return (
    <nav className="top-0 sticky bg-white py-3 block border-b z-50 shadow-sm">
      <div className="flex px-10 justify-between mx-auto items-center max-w-screen-xl">
        <Link href="" className="inline-block italic">
          <span className="inline-block text-[1.4rem] font-bold">T-D</span>
          <span className="inline-block ">igital</span>
        </Link>
        <div className="">
          <Link href='/' className="pr-3 md:pr-6 sm:pl-3 md:pl-6 py-4">Home</Link>
          <Link href='#portfolio' className="px-3 md:px-6 py-4">Portfolio</Link>
          <Link href='#about' className="px-3 md:px-6 py-4">About</Link>
          <Link href='#team' className="px-3 md:px-6 py-4">Team</Link>
        </div>
        <div>
          <a href="" className="inline-block bg-[#4E29C4] text-white rounded-lg py-2 px-4">Hire Us</a>
        </div>
      </div>
    </nav>
  )
}

export default Nav