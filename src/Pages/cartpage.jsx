import { Link } from "react-router-dom"
import { RiArrowDropRightLine } from "react-icons/ri"
import CartImg1 from "../assets/img/laptop1.png"
import CartImg2 from "../assets/img/ipad1.png"

const CartPage = () => {
  return (
    <>
      <div>
        <div className="md:flex md:justify-between items-center max-w-full md:h-14 mt-5 md:px-28 text-black text-base font-[Poppins]">
          <div className="md:flex items-center text-sm hidden ">
            <h2>Home</h2>
            <RiArrowDropRightLine className="text-2xl" />
            <div className="flex ml-1">
              <h2>Products Listing</h2>
              <RiArrowDropRightLine className="text-xl" />
            </div>
            <div className="flex ml-1">
              <h2>Computers & Tablets</h2>
              <RiArrowDropRightLine className="text-xl" />
            </div>
            <div className="flex ml-1">
              <h2>Cart</h2>
            </div>
          </div>
        </div>
        <div className="mt-5 md:px-28 lg:px-28 px-5">
          <h1 className="font-bold text-xl">Cart Page</h1>
          <div className="md:flex lg:flex md:justify-between lg:justify-between mt-4 gap-6">
            <div className="bg-[#fcfcfc] border-none shadow-sm rounded-sm w-full md:w-2/3 lg:w-2/3 px-6 py-8">
              {[CartImg1, CartImg2].map((image, index) => (
                <div
                  className="flex justify-between space-x-6 mb-6"
                  key={index}
                >
                  <div>
                    <img src={image} alt="" className="w-[120px]" />
                  </div>
                  <div className="flex-1">
                    <p className="md:text-sm lg:text-sm text-xs font-bold">
                      DELL Latitude {"3420-14"} FHD-11th Gen Intel Core
                      I7-1165G7 Quad-Core-8GB
                    </p>
                    <p className="flex">
                      <select name="" id="1">
                        1
                      </select>
                    </p>
                    <span className="text-xs text-gray-500 cursor-pointer">
                      Move to Favourite
                    </span>
                    <span className="text-xs text-gray-500 ml-3 cursor-pointer">
                      Delete
                    </span>
                  </div>
                  <span className="text-xs font-extrabold">$134.5</span>
                </div>
              ))}
            </div>
            <div className="bg-[#fcfcfc] border-none shadow-sm rounded-sm w-full md:w-1/3 lg:w-1/3 px-4 py-5 md:mr-0 lg:mr-0 mt-6 md:mt-0 lg:mt-0">
              <h1 className="font-bold text-lg">Order Summary</h1>
              <p className="text-sm mt-2">Do you have a promo code?</p>
              {[CartImg1, CartImg2].map((image, index) => (
                <div
                  className="flex justify-between space-x-6 mt-3"
                  key={index}
                >
                  <div>
                    <img src={image} alt="" className="w-[120px]" />
                  </div>
                  <div className="">
                    <p className="text-xs font-bold">
                      DELL Latitude {"3420-14"} FHD-11th Gen Intel Core
                      I7-1165G7 Quad-Core-8GB
                    </p>
                    <p className="text-xs mt-2">
                      1 <span className="text-xs text-blue-700"> x $134.5</span>
                    </p>
                  </div>
                </div>
              ))}
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700">Sub-total</span>
                  <span>$537.95</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700">Discount</span>
                  <span>$56</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700">Tax</span>
                  <span>$5.99</span>
                </div>
              </div>
              <div className="mt-4 border-t pt-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>$537.95 USD</span>
                </div>
              </div>
              <Link to="/Payout">
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md text-center font-medium hover:bg-blue-700">
                  Place Order
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartPage
