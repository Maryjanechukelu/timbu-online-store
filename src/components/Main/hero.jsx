import { RiArrowDropDownLine } from "react-icons/ri"
import Laptop1 from "../../assets/img/laptop1.png"
import Laptop2 from "../../assets/img/laptop2.png"
import Laptop3 from "../../assets/img/laptop3.png"
import { CiStar } from "react-icons/ci"
import { IoEyeOutline } from "react-icons/io5"
import { CiHeart } from "react-icons/ci"
import { Link } from "react-router-dom"
import { MdStars } from "react-icons/md"
import { IoIosArrowRoundForward } from "react-icons/io"
import BannerImg from "../../assets/img/flashsale-laptop.png"

const hero = () => {
    return (
      <>
        <div className="md:flex md:justify-between lg:flex lg:justify-between md:space-x-4 lg:space-x-6  px-2 md:px-10 lg:px-20 mt-10 ">
          <div className="md:w-[200px] lg:w-[300px] hidden md:inline-block lg:inline-block items-center md:justify-start lg:justify-start px-4 md:px-10 lg:px-10 py-5 border-none shadow-md outline-none bg-[#F8F9FF]">
            <div className="flex items-center border-none cursor-pointer shadow-sm px-3 ">
              <h1 className="">Categories</h1>
              <RiArrowDropDownLine className="text-2xl" />
            </div>
            <div className="md:w-full w-1/2">
              <ul className="w-full">
                <li className="py-1 mt-2 w-full text-sm">
                  <input type="checkbox" className="mr-2 w-4 h-4" />
                  Computers & Tablets
                </li>
                <li className="py-1 w-full text-sm">
                  <input type="checkbox" className="mr-2 w-4 h-4" />
                  Mobile Accessories
                </li>
                <li className="py-1 w-full text-sm">
                  <input type="checkbox" className="mr-2 w-4 h-4" />
                  TVs & Theatre
                </li>
                <li className="py-1 w-full text-sm">
                  <input type="checkbox" className="mr-2 w-4 h-4" />
                  Audio & Headphones
                </li>
                <li className="py-1 w-[250px] text-sm">
                  <input type="checkbox" className="mr-2 w-4 h-4" />
                  Cameras and Camcorders
                </li>
                <li className="py-1 w-full text-sm">
                  <input type="checkbox" className="mr-2 w-4 h-4" />
                  Gaming Equipments
                </li>
                <li className="py-1 w-full text-sm">
                  <input type="checkbox" className="mr-2 w-4 h-4" />
                  Home Appliances
                </li>
              </ul>
            </div>

            <div className="flex items-center mt-8 border-none cursor-pointer shadow-sm px-3 ">
              <h1 className="">Brands</h1>
              <RiArrowDropDownLine className="text-2xl" />
            </div>
            <div className="w-full justify-between">
              <ul className="w-full">
                <li className="py-1 mt-2 w-full text-sm">
                  <input type="checkbox" className="mr-2 w-4 h-4" />
                  Dells <span className="ml-20">[320]</span>
                </li>
                <li className="py-1 w-full text-sm">
                  <input type="checkbox" className="mr-2 w-4 h-4" />
                  HP <span className="ml-20">[320]</span>
                </li>
                <li className="py-1 w-full text-sm">
                  <input type="checkbox" className="mr-2 w-4 h-4" />
                  Samsung <span className="ml-10">[320]</span>
                </li>
                <li className="py-1 w-full text-sm">
                  <input type="checkbox" className="mr-2 w-4 h-4" />
                  Apple <span className="ml-16">[320]</span>
                </li>
                <li className="py-1 w-[250px] text-sm">
                  <input type="checkbox" className="mr-2 w-4 h-4" />
                  Google Pixels <span className="ml-5">[320]</span>
                </li>
                <li className="py-1 w-full text-sm">
                  <input type="checkbox" className="mr-2 w-4 h-4" />
                  Xaomi <span className="ml-16">[320]</span>
                </li>
                <li className="py-1 w-full text-sm">
                  <input type="checkbox" className="mr-2 w-4 h-4" />
                  Lenovo <span className="ml-14">[320]</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center mt-8 border-none cursor-pointer shadow-sm px-3 ">
              <h1 className="">Brands</h1>
              <RiArrowDropDownLine className="text-2xl" />
            </div>
            <div className="w-full justify-between">
              <ul className="w-full">
                <li className="py-1 mt-2 w-full text-sm">
                  <input type="checkbox" className="mr-2 w-4 h-4" />
                  Dells <span className="ml-20">[320]</span>
                </li>
                <li className="py-1 w-full text-sm">
                  <input type="checkbox" className="mr-2 w-4 h-4" />
                  HP <span className="ml-20">[320]</span>
                </li>
              </ul>
            </div>
          </div>

          {/* left side */}
          <div className=" border-none w-full h-full mx-auto my-auto border-gray-300 md:shadow-md font-[Poppins] px-3 py-2 md:px-6 md:py-6 lg:px-6 lg:py-6">
            <h1 className=" flex mt-4 font-bold">Products</h1>
            <div className="md:flex lg:flex md:justify-between lg:justify-between block justify-end w-full mt-3 ">
              <div className=" ">
                <p className="text-xs text-gray-500">Showing 1-20 of 250</p>
              </div>

              <div className="md:flex md:justify-evenly md:space-x-6 hidden">
                <div className="">
                  <p className="text-sm text-gray-500">Sorted by</p>
                </div>
                <div className="md:flex ">
                  <button className="text-sm">Popularity</button>
                  <RiArrowDropDownLine className="text-2xl" />
                </div>
                <div className="md:flex ">
                  <button className="text-sm">Price-Low-to-High</button>
                  <RiArrowDropDownLine className="text-2xl" />
                </div>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 mt-10 ">
              <div className="border border-gray-100 md:px-4 px-6 md:w-[300px] md:h-[430px] lg:w-[300px] lg:h-[430px] pb-4 mt-6 md:mt-0 lg:mt-0 rounded-md hover:shadow-md">
                <div className="group">
                  <div className="mt-4 flex justify-end items-center ">
                    <span className="border-none shadow-sm p-2 invisible group-hover:visible bg-[#E22367] rounded-lg w-11 h-10 text-white ">
                      50%
                    </span>
                  </div>
                  <div className="">
                    <img
                      src={Laptop1}
                      alt=""
                      className="md:w-[230px] md:h-[220px] lg:w-[230px] lg:h-[220px]  "
                    />
                    <div className="flex p-0">
                      <Link to="/cartpage">
                        <button className="border-none shadow-sm p-2 invisible group-hover:visible bg-[#E22367] rounded-lg text-white">
                          Add to Cart
                        </button>
                      </Link>
                      <IoEyeOutline className="text-3xl ml-3 invisible group-hover:visible text-[#E22367]" />
                      <CiHeart className="text-3xl ml-3 invisible group-hover:visible text-[#E22367]" />
                    </div>
                    <div>
                      <h1 className="text-gray-400 ">LAPTOPS</h1>
                      <p className="text-xs font-bold mt-1">
                        DELL Latitude {"3420-14"} FHD-11th Gen Intel Core
                        I7-1165G7 Quad-Core-8G
                      </p>
                      <div className="flex mt-1">
                        <CiStar className="" />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <span className="text-xs">[210]</span>
                      </div>
                      <div className="mt-1 flex">
                        <p className="text-sm">$143.20</p>
                        <p className="text-sm text-gray-400 ml-3">$143.20</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-gray-100 md:px-4 px-6 md:w-[300px] md:h-[430px] lg:w-[300px] lg:h-[430px] pb-4 mt-6 md:mt-0 lg:mt-0 rounded-md hover:shadow-md">
                <div className="group">
                  <div className="mt-4 flex justify-end items-center ">
                    <span className="border-none shadow-sm p-2 invisible group-hover:visible bg-[#E22367] rounded-lg w-11 h-10 text-white self">
                      50%
                    </span>
                  </div>
                  <div className="">
                    <img
                      src={Laptop2}
                      alt=""
                      className="md:w-[230px] md:h-[220px] lg:w-[230px] lg:h-[220px] "
                    />
                    <div className="flex p-0">
                      <Link to="/cartpage">
                        <button className="border-none shadow-sm p-2 invisible group-hover:visible bg-[#E22367] rounded-lg text-white">
                          Add to Cart
                        </button>
                      </Link>
                      <IoEyeOutline className="text-3xl ml-3 invisible group-hover:visible text-[#E22367]" />
                      <CiHeart className="text-3xl ml-3 invisible group-hover:visible text-[#E22367]" />
                    </div>
                    <div>
                      <h1 className="text-gray-400 ">LAPTOPS</h1>
                      <p className="text-xs font-bold mt-1">
                        DELL Latitude {"3420-14"} FHD-11th Gen Intel Core
                        I7-1165G7 Quad-Core-8G
                      </p>
                      <div className="flex mt-1">
                        <CiStar className="" />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <span className="text-xs">[210]</span>
                      </div>
                      <div className="mt-1 flex">
                        <p className="text-sm">$143.20</p>
                        <p className="text-sm text-gray-400 ml-3">$143.20</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-gray-100 md:px-4 px-6 md:w-[300px] md:h-[430px] lg:w-[300px] lg:h-[430px] pb-4 mt-6 md:mt-0 lg:mt-0 rounded-md hover:shadow-md">
                <div className="group">
                  <div className="mt-4 flex justify-end items-center ">
                    <span className="border-none shadow-sm p-2 invisible group-hover:visible bg-[#E22367] rounded-lg w-11 h-10 text-white self">
                      50%
                    </span>
                  </div>
                  <div className="">
                    <img
                      src={Laptop3}
                      alt=""
                      className="md:w-[230px] md:h-[220px] lg:w-[230px] lg:h-[220px]"
                    />
                    <div className="flex p-0">
                      <Link to="/cartpage">
                        <button className="border-none shadow-sm p-2 invisible group-hover:visible bg-[#E22367] rounded-lg text-white">
                          Add to Cart
                        </button>
                      </Link>
                      <IoEyeOutline className="text-3xl ml-3 invisible group-hover:visible text-[#E22367]" />
                      <CiHeart className="text-3xl ml-3 invisible group-hover:visible text-[#E22367]" />
                    </div>
                    <div>
                      <h1 className="text-gray-400 ">LAPTOPS</h1>
                      <p className="text-xs font-bold mt-1">
                        DELL Latitude {"3420-14"} FHD-11th Gen Intel Core
                        I7-1165G7 Quad-Core-8G
                      </p>
                      <div className="flex mt-1">
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <span className="text-xs">[210]</span>
                      </div>
                      <div className="mt-1 flex">
                        <p className="text-sm">$143.20</p>
                        <p className="text-sm text-gray-400 ml-3">$143.20</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[1000px] max-w-fit md:flex md:flex-row md:justify-between justify-center md:ml-52 lg:flex lg:flex-row lg:justify-between lg:ml-52 mt-10 px-2 mx-2 md:mx-10 md:px-10  bg-[#F8F9FF] border-none border-gray-200 shadow-md rounded-sm">
          <div className="md:p-10 p-5">
            <div className="flex md:w-full">
              <MdStars className="mt-4 text-xl text-blue-500" />
              <h1 className=" mt-4 text-sm  text-blue-500 ml-3 ">
                Top Product of the Month
              </h1>
            </div>
            <h1 className="mt-4 font-bold text-2xl w-auto">
              Up to 45% Off On Digital Items
            </h1>
            <p className="text-gray-400">
              This feature-packed smartwatch boasts health tracking (steps,
              heart rate, sleep), Bluetooth calling & music, a {"2.09"} display,
              and supports various sports modes.
            </p>
            <button className=" flex mt-5 border-none shadow-sm p-2 bg-[#007BFF] rounded-none text-white">
              Shop Now
              <IoIosArrowRoundForward className="text-xl mt-1" />
            </button>
          </div>
          <div className="p-10">
            <img src={BannerImg} alt="" className="md:w-[1150px] h-auto mt-4" />
          </div>
        </div>
      </>
    )
}

export default hero
