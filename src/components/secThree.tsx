import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { testimonials } from "./utils"

const SectionThree = () => {
  return (
    <div className="py-16">
      <div className="text-xl mb-6 text-center font-semibold"><span className="inline-block">T</span><span className="inline-block decoration-wavy underline underline-offset-8">estimonial</span><span className="inline-block">s</span></div>
      <div className="text-center w-1/2 mb-10 mx-auto">
        Our team members are experts in all facets of the software industry.
      </div>
      <div className="flex w-full pb-10 overflow-x-auto relative">
        {
          testimonials.map((people, u) =>
            <div key={u} className="min-w-[400px] mr-6 bg-white p-4 rounded-md shadow-md">
              <div className="flex justify-between">
                <div className="inline-flex w-16 h-16">
                  <Image src={people.image} alt='' className="object-contain w-full h-full" width={255} height={255} />
                </div>
                <div>
                  {
                    Array(people.star).fill(0).map((_, i) => <span key={i} className="inline-block text-amber-400"><FontAwesomeIcon icon={faStar} /></span>)
                  }
                  {
                    Array(5 - people.star).fill(0).map((_, m) => <span key={m} className="inline-block text-slate-200"><FontAwesomeIcon icon={faStar} /></span>)
                  }
                </div>
              </div>
              <div className="font-[500] my-2">{people.name}</div>
              <div className="text-[0.8rem]">
                {people.comment}
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default SectionThree