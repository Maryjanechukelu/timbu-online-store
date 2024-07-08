import { HiMagnifyingGlass } from "react-icons/hi2"
import { VscAccount } from "react-icons/vsc"
import { MdOutlineShoppingCart } from "react-icons/md"

const navbar = () => {
  return (
    <div className="flex md:flex lg:flex md:justify-center justify-between items-center max-w-full h-18 mx-auto px-2 md:px-14 lg:px-14 mt-4 text-black text-base font-[Poppins]">
      <h1 className="md:w-full text-xs lg:text-xl md:text-xl  font-bold text-[#050505]">
        TimbuCloudShop
      </h1>
      <div className="md:flex lg:flex md:justify-center lg:justify-center justify-between items-center">
        <div className="flex items-center md:mr-10 bg-white md:w-[320px] lg:w-[320px] md:h-12 h-7 w-[180px] shadow-xs rounded-lg border border-gray-300 p-2  ">
          <input
            type="text"
            placeholder="Search Product"
            className="md:flex md:flex-grow lg:flex-grow md:p-2 text-xs rounded-full outline-none"
          />
          <HiMagnifyingGlass className="w-5 h-5" />
        </div>
        <MdOutlineShoppingCart className="w-14 h-6 hidden md:flex lg:flex" />
        <VscAccount className="w-14 h-6 hidden md:flex lg:flex" />
      </div>
    </div>
  )
}

export default navbar
