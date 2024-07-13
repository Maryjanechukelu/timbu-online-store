import { useEffect, useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri"
import { MdStars } from "react-icons/md"
import { IoIosArrowRoundForward } from "react-icons/io"
import BannerImg from "../../assets/img/flashsale-laptop.png"
import ProductCard from "../../components/Product/ProductCard"
import products from "../Product/Products"
import categories from "../Categories/categories"
import { getProducts } from "../../Api"

const Hero = () => {
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const products = await getProducts()
      setProducts(products)
      setLoading(false)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  fetchProducts()
}, [])

if (loading) return <div>Loading...</div>
if (error) return <div>Error loading products: {error.message}</div>

  return (
    <>
      <div className="flex flex-col md:flex-row lg:flex-row justify-between px-2 md:px-10 lg:px-20 mt-10 ">
        <div className=" hidden md:flex lg:flex flex-col md:w-2/4 lg:w-1/4 h-[50%] items-start px-4 md:px-6 lg:px-10 py-5 bg-[#F8F9FF] shadow-md">
          <div className="flex items-center cursor-pointer shadow-sm px-3 ">
            <button className="">Categories</button>
            <RiArrowDropDownLine className="text-2xl" />
          </div>
          <div className="w-full">
            <ul className="w-full">
              {categories.map((category, index) => (
                <li key={index} className="py-1 mt-2 w-full text-sm">
                  <input type="checkbox" className="mr-2 w-4 h-4" />
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center mt-8 cursor-pointer shadow-sm px-3">
            <h1>Brands</h1>
            <RiArrowDropDownLine className="text-2xl" />
          </div>
          <div className="w-full">
            <ul className="w-full">
              {[
                "Dells",
                "HP",
                "Samsung",
                "Apple",
                "Google Pixels",
                "Xaomi",
                "Lenovo",
              ].map((brand, index) => (
                <li key={index} className="py-1 mt-2 w-full text-sm gap-4">
                  <input type="checkbox" className="mr-2 w-4 h-4" />
                  {brand} <span className="ml-">[320]</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* left side */}
        <div className="font-[Poppins]">
          <h1 className="flex mt-4 font-bold">Products</h1>
          <div className="flex justify-between w-full mt-3">
            <div>
              <p className="text-xs text-gray-500">Showing 1-20 of 250</p>
            </div>
            <div className="hidden md:flex md:space-x-6">
              <div>
                <p className="text-sm text-gray-500">Sorted by</p>
              </div>
              <div className="flex">
                <button className="text-sm">Popularity</button>
                <RiArrowDropDownLine className="text-2xl" />
              </div>
              <div className="flex">
                <button className="text-sm">Price-Low-to-High</button>
                <RiArrowDropDownLine className="text-2xl" />
              </div>
            </div>
          </div>

          <div className=" w-full h-full px-3 py- md:px-6 md:py- lg:px-6 lg:py-">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-16 lg:gap-4  mt-4">
              {products.map((product, index) => (
                <ProductCard key={index} product={products} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full md:w-[1500px] max-w-fit md:flex md:flex-row md:justify-between justify-center md:ml- lg:flex lg:flex-row lg:justify-between lg:ml- mt-10 px-2 mx-2 md:mx-10 md:px-10  bg-[#F8F9FF] border-none border-gray-200 shadow-md rounded-sm">
          <div className="md:p-10 p-5">
            <div className="flex md:w-full">
              <MdStars className="mt-4 text-2xl text-blue-500" />
              <h1 className=" mt-4 md:text-base lg:text-xl  text-base font-bold  text-blue-500 ml-3 ">
                Top Product of the Month
              </h1>
            </div>
            <h1 className="mt-4 font-bold md:text-2xl lg:text-4xl text-2xl w-auto">
              Up to 45% Off On Digital Items
            </h1>
            <p className="text-gray-400 md:text-sm lg:text-xl w-auto">
              This feature-packed smartwatch boasts health tracking (steps,
              heart rate, sleep), Bluetooth calling & music, a {"2.09"} display,
              and supports various sports modes.
            </p>
            <button className=" flex mt-8 border-none shadow-sm p-2 bg-[#007BFF] rounded-none text-white">
              Shop Now
              <IoIosArrowRoundForward className="text-xl mt-1" />
            </button>
          </div>
          <div className="p-10">
            <img src={BannerImg} alt="" className="md:w-[1150px] h-auto mt-4" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
