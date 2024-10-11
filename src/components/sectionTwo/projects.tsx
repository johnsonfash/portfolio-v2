import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

const Projects = () => {
  return (
    <div className="relative w-full">
      <div className="flex w-full overflow-x-auto items-center justify-center mb-6 pb-4 mt-10">
        <button className="mx-2 px-3 py-1 rounded-sm whitespace-nowrap bg-[#4E29C4] border hover:shadow-xl active:shadow-none shadow-sm text-white">All</button>
        <button disabled className="mx-2 whitespace-nowrap px-3 py-1 rounded-sm bg-slate-50 border hover:shadow-xl active:shadow-none shadow-md">Web Apps</button>
        <button disabled className="mx-2 whitespace-nowrap px-3 py-1 rounded-sm bg-slate-50 border hover:shadow-xl active:shadow-none shadow-md">Desktop Apps</button>
        <button disabled className="mx-2 whitespace-nowrap px-3 py-1 rounded-sm bg-slate-50 border hover:shadow-xl active:shadow-none shadow-md">Mobile Apps</button>
      </div>
      <div className="flex flex-wrap items-stretch justify-between">
        <div className="w-full md:w-[32%] mb-10 md:mb-0 flex flex-col justify-between">
          <div className="border rounded-md mb-10 md:mb-0 shadow-md hover:shadow-none min-h-[39%] flex flex-col">
            <div className="h-full overflow-hidden">
              <Image src='/guideapp-zep.png' alt='' className="object-cover w-full h-full" width={3420} height={2214} />
            </div>
            <div className="border-t flex py-2 px-3 items-center justify-between">
              <div>
                <div className="font-semibold">Guideapp</div>
                <div className="text-[0.8rem]">Tiktok for training</div>
              </div>
              <a href="https://my.guideapp.co" target="_blank" className="inline-flex items-center justify-center text-white rounded-full bg-[#4E29C4] h-7 w-7"><FontAwesomeIcon icon={faChevronRight} /></a>
            </div>
          </div>
          <div className="border rounded-md mb-10 md:mb-0 shadow-md hover:shadow-none min-h-[59%] flex flex-col">
            <div className="h-full overflow-hidden">
              <Image src='/swiftsign-zep.png' alt='' className="object-cover w-full h-full" width={3420} height={2214} />
            </div>
            <div className="border-t flex py-2 px-3 items-center justify-between">
              <div>
                <div className="font-semibold">Swiftsign</div>
                <div className="text-[0.8rem]">Electronic signature app</div>
              </div>
              <a href="https://swiftsign.ng" target="_blank" className="inline-flex items-center justify-center text-white rounded-full bg-[#4E29C4] h-7 w-7"><FontAwesomeIcon icon={faChevronRight} /></a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[32%] mb-10 md:mb-0  flex flex-col justify-between">
          <div className="border rounded-md shadow-md hover:shadow-none min-h-[25%] flex flex-col">
            <div className="h-full overflow-hidden">
              <Image src='/swayauth-zep.png' alt='' className="object-cover w-full h-full" width={3420} height={2214} />
            </div>
            <div className="border-t flex py-2 px-3 items-center justify-between">
              <div>
                <div className="font-semibold">Swayauth</div>
                <div className="text-[0.8rem]">Authentication saas</div>
              </div>
              <a href="https://swayauth.com" target="_blank" className="inline-flex items-center justify-center text-white rounded-full bg-[#4E29C4] h-7 w-7"><FontAwesomeIcon icon={faChevronRight} /></a>
            </div>
          </div>
          <div className="border rounded-md mb-10 md:mb-0 shadow-md hover:shadow-none min-h-[46%] my-[6%]  flex flex-col">
            <div className="h-full">
              <Image src='/roadlers-zep.png' alt='' className="object-cover w-full h-full" width={3420} height={2214} />
            </div>
            <div className="border-t flex py-2 px-3 items-center justify-between">
              <div>
                <div className="font-semibold">Roadlers</div>
                <div className="text-[0.8rem]">Vehicle booking</div>
              </div>
              <a href="https://roadlers.com" target="_blank" className="inline-flex items-center justify-center text-white rounded-full bg-[#4E29C4] h-7 w-7"><FontAwesomeIcon icon={faChevronRight} /></a>
            </div>
          </div>
          <div className="border rounded-md shadow-md hover:shadow-none min-h-[25%] flex flex-col">
            <div className="h-full overflow-hidden">
              <Image src='/virtualrx-zep.png' alt='' className="object-cover w-full h-full" width={700} height={600} />
            </div>
            <div className="border-t flex py-2 px-3 items-center justify-between">
              <div>
                <div className="font-semibold">VirtualRx</div>
                <div className="text-[0.8rem]">Inventory management</div>
              </div>
              <a href="https://virtualrx.ng" target="_blank" className="inline-flex items-center justify-center text-white rounded-full bg-[#4E29C4] h-7 w-7"><FontAwesomeIcon icon={faChevronRight} /></a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[32%] flex flex-col justify-between">
          <div className="border rounded-md shadow-md hover:shadow-none min-h-[25%] flex flex-col">
            <div className="h-full overflow-hidden">
              <Image src='/dormot-zep.png' alt='' className="object-cover w-full h-full" width={3420} height={2214} />
            </div>
            <div className="border-t flex py-2 px-3 items-center justify-between">
              <div>
                <div className="font-semibold">Dormot App</div>
                <div className="text-[0.8rem]">Home delivery logistics</div>
              </div>
              <a href="https://www.yourdormot.com" target="_blank" className="inline-flex items-center justify-center text-white rounded-full bg-[#4E29C4] h-7 w-7"><FontAwesomeIcon icon={faChevronRight} /></a>
            </div>
          </div>
          <div className="border rounded-md mb-10 md:mb-0 shadow-md hover:shadow-none min-h-[25%] my-[6%] flex flex-col">
            <div className="h-full overflow-hidden">
              <Image src='/supermart-zep.png' alt='' className="object-cover w-full h-full" width={3420} height={2214} />
            </div>
            <div className="border-t flex py-2 px-3 items-center justify-between">
              <div>
                <div className="font-semibold">Supermart</div>
                <div className="text-[0.8rem]">Ecommerce website</div>
              </div>
              <a href="https://www.supermart.ng" target="_blank" className="inline-flex items-center justify-center text-white rounded-full bg-[#4E29C4] h-7 w-7"><FontAwesomeIcon icon={faChevronRight} /></a>
            </div>
          </div>
          <div className="border rounded-md shadow-md hover:shadow-none min-h-[46%] flex flex-col">
            <div className="h-full">
              {/* <Image src='/guideapp.png' alt='' className="object-cover w-full h-full" width={3420} height={2214} /> */}
            </div>
            <div className="border-t flex py-2 px-3 items-center justify-between">
              <div>
                <div className="font-semibold">VPN Mobile App</div>
                <div className="text-[0.8rem]">Vpn app</div>
              </div>
              <span className="inline-flex items-center justify-center text-white rounded-full bg-[#4E29C4] h-7 w-7"><FontAwesomeIcon icon={faChevronRight} /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects