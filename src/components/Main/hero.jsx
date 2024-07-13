// import axios from 'axios';
import { useEffect, useState } from "react"
import { RiArrowDropDownLine } from "react-icons/ri"
import { MdStars } from "react-icons/md"
import { IoIosArrowRoundForward } from "react-icons/io"
import BannerImg from "../../assets/img/flashsale-laptop.png"
import ProductCard from "../../components/Product/ProductCard"
// import products from "../Product/Products"
import categories from "../Categories/categories"

const fetchProducts = async ({
  organization_id,
  reverse_sort,
  page,
  size,
  Appid,
  Apikey,
}) => {
  const url = new URL("https://timbu-get-all-products.reavdev.workers.dev/")
  url.searchParams.append("organization_id", organization_id)
  url.searchParams.append("reverse_sort", reverse_sort)
  // url.searchParams.append("page", page)
  url.searchParams.append("size", size)
  url.searchParams.append("Appid", Appid)
  url.searchParams.append("Apikey", Apikey)

  const response = await fetch(url.toString())

  if (!response.ok) {
    throw new Error("Network response was not ok")
  }

  return response.json()
}

const Hero = () => {
const [products, setProducts] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [isEmpty, setIsEmpty] = useState(false)
const [isError, setIsError] = useState(false)
// const [page, setPage] = useState(1)

useEffect(() => {
  const params = {
    organization_id: "00b19697d50f4c8198841e0c810259bf",
    reverse_sort: "false",
    size: 5,
    Appid: "GZ36CNEXP03X0EW",
    Apikey: "01a261506aa2480ca207f7f1eed3732220240713073416787076",
  }

  const getProducts = async () => {
    setIsLoading(true)
    setIsError(false)
    try {
      const data = await fetchProducts(params)
      setProducts(data.items)
      setIsEmpty(data.total === 0)
    } catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  getProducts()
}, [])

if (isLoading) return <div>Loading...</div>
if (isError) return <div>Error fetching products</div>
if (isEmpty) return <div>No products found</div>

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12 lg:gap-4  mt-4">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
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
