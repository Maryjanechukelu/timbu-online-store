import { LuFacebook, LuInstagram } from "react-icons/lu"
import { RiTwitterXLine } from "react-icons/ri"
import { FaYoutube } from "react-icons/fa";
import PayLogo from "../../assets/img/payment.png"

const footer = () => {
  return (
    <footer className="bg-[#660028] border w-full md:w-full lg:w-full mt-20  text-white flex-row-reverse md:flex md:flex-row lg:flex-row justify-evenly">
      <div className=" md:px-20 lg:px-20 px-6 pt-10 md:mb-10 font-[Poppins]">
        <h1 className="text-md flex justify-center">TimbuCloudStore</h1>
        <div className="flex justify-center mt-2 gap-2">
          <LuFacebook className="text-xl" />
          <LuInstagram className="md:ml-3 text-xl " />
          <FaYoutube className="md:ml-3 text-2xl " />
          <RiTwitterXLine className="md:ml-3 text-xl " />
        </div>
      </div>

      <div className=" grid grid-cols-1 gap-4 justify-center md:grid md:grid-cols-4 md:gap-10 lg:grid lg:grid-cols-4 lg:gap-20 px-4 md:px-10 lg:px-10 pt-6 md:pt-10 lg:pt-10 mb-5 md:mb-10">
        <div className="flex justify-center items-center">
          <div>
            <h1 className="text-xl md:text-2xl">Link</h1>
            <p className="text-sm pt-2">Products</p>
            <p className="text-sm">Blogs</p>
            <p className="text-sm">Contact</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="justify-center items-center">
            <h1 className="text-xl md:text-2xl">Support</h1>
            <p className="text-xs md:text-sm pt-2">About Us</p>
            <p className="text-xs md:text-sm">Privacy Policy</p>
            <p className="text-xs md:text-sm">Return Policy</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <h1 className=" text-xl md:text-2xl">Categories</h1>
            <p className="text-xs md:text-sm pt-2">Computers & Tablets</p>
            <p className="text-xs md:text-sm">Mobile Accessories</p>
            <p className="text-xs md:text-sm">TVs & Home Theatre</p>
          </div>
        </div>
        <div className=" flex justify-center items-center md:-mt-10 lg:-mt-10">
          <div className="">
            <h1 className=" text-xl md:text-2xl">Payments</h1>
            <img src={PayLogo} alt="" className="w-24 md:w-32 pt-2" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer
