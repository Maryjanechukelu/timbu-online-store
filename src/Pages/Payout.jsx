import { useState } from "react"
import { Link } from "react-router-dom"
import Modal from "../components/Modal/modal"
import { RiArrowDropRightLine } from "react-icons/ri"
import { IoIosArrowRoundForward } from "react-icons/io"
import CartImg1 from "../assets/img/laptop1.png"
import CartImg2 from "../assets/img/ipad1.png"
import SuccessImg from "../assets/img/success.png"
import Amazon from "../assets/img/amazon.png"
import Dollar from "../assets/img/dollar.png"
import Card from "../assets/img/creditcard.png"

const Payout = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="md:flex max-w-full h-14 mt-5 px-28 text-black text-base font-[Poppins] hidden">
        <div className="flex items-center text-sm ">
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
            <RiArrowDropRightLine className="text-xl" />
          </div>
          <div className="flex ml-1">
            <h2>Checkout</h2>
          </div>
        </div>
      </div>
      <div className="mt-4 md:px-28 lg:px-28 px-5 ">
        <h2 className="md:text-xl lg:text-xl text-lg font-bold mt-6 ">
          Billing Information
        </h2>
        <div className="md:flex lg:flex md:flex-row lg:flex-row  md:justify-between lg:justify-between">
          <form action="" className="mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="company-name"
                className="block text-sm font-medium text-gray-700"
              >
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="company-name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
              <div className="md:col-span-2">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <select
                  id="country"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>Select...</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="region-state"
                  className="block text-sm font-medium text-gray-700"
                >
                  Region/State
                </label>
                <select
                  id="region-state"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>Select...</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="zip-code"
                  className="block text-sm font-medium text-gray-700"
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zip-code"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone-number"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="ship-different"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label
                  htmlFor="ship-different"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Ship into different address
                </label>
              </div>
            </div>
            <div className="mt-4 border-t pt-4">
              <div className="flex items-center md:space-x-4">
                <button
                  type="button"
                  className="flex-1 flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <img src={Dollar} alt="" className="mr-2 w-4 h-4" />
                  Cash on Delivery
                </button>
                <button
                  type="button"
                  className="flex-1 flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <img src={Amazon} alt="" className="mr-2 w-5 h-5" />
                  Amazon Pay
                </button>
                <button
                  type="button"
                  className="flex-1 flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <img src={Card} alt="" className="mr-2 w-5 h-5" /> Debit/Credit Card
                </button>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label
                  htmlFor="card-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name on Card
                </label>
                <input
                  type="text"
                  id="card-name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="card-number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  id="card-number"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="card-expiry"
                  className="block text-sm font-medium text-gray-700"
                >
                  Expire Date
                </label>
                <input
                  type="text"
                  id="card-expiry"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label
                  htmlFor="card-cvc"
                  className="block text-sm font-medium text-gray-700"
                >
                  CVC
                </label>
                <input
                  type="text"
                  id="card-cvc"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="order-notes"
                className="block text-sm font-medium text-gray-700"
              >
                Order Notes (Optional)
              </label>
              <textarea
                id="order-notes"
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Notes about your order, e.g. special notes for delivery"
              ></textarea>
            </div>
          </form>

          <div className="bg-[#fcfcfc] border-none shadow-sm rounded-sm md:w-[370px] lg:w-[370px] md:h-[540px] lg:h-[540px] mt-6 px-4 py-5 md:mr-[180px] lg:mr-[180px]  ">
            <h1 className="font-bold text-lg">Order Summary</h1>
            <p className="text-sm mt-2">Do yo have a promo code?</p>
            <div className="flex justify-between mt-3 space-x-6">
              <div>
                <img src={CartImg1} alt="" className="w-[120px]" />
              </div>
              <div className="">
                <p className="text-xs font-bold">
                  DELL Latitude {"3420-14"} FHD-11th Gen Intel Core I7-1165G7
                  Quad-Core-8GB
                </p>
                <p className="text-xs mt-2">
                  1 <span className="text-xs text-blue-700"> x $134.5</span>
                </p>
              </div>
            </div>

            <div className="flex justify-between space-x-6">
              <div>
                <img src={CartImg2} alt="" className="w-[120px]" />
              </div>
              <div className="">
                <p className="text-xs font-bold">
                  DELL Latitude {"3420-14"} FHD-11th Gen Intel Core I7-1165G7
                  Quad-Core-8GB
                </p>
                <p className="text-xs mt-2">
                  3 <span className="text-xs text-blue-700"> x $134.5</span>
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">Sub-total</span>
                <span>$587.96</span>
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

            <button
              onClick={() => setOpen(true)}
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md text-center font-medium hover:bg-blue-700"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="border-none rounded-lg  border-gray-300 mx-10 md:px-10 lg:px-10 md:py-5 lg:py px-3 py-3">
          <div className="flex justify-center">
            <img src={SuccessImg} alt="" className="w-[60px] text-center" />
          </div>
          <p className="text-center font-bold text-lg">
            Your Order is successfully placed
          </p>
          <p className="md:w-[800px] lg:w-[800px] w-full text-center text-sm">
            Your order is on its way! We have received it and are processing it
            for fulfillment. You will receive a confirmation email with more
            details shortly, including estimated delivery timelines.
          </p>
          <div className="flex justify-center items-center gap-6">
            <Link to="/">
              <button className="flex mt-5 border shadow-sm p-3 bg-none hover:bg-gray-300 rounded-sm text-black">
                Return Home
              </button>
            </Link>
            <Link to="/cartpage">
              <button className="flex mt-5 border-none shadow-sm p-3 bg-[#007BFF] hover:bg-[#4340da] rounded-sm text-white">
                View Order
                <IoIosArrowRoundForward className="text-xl mt-1" />
              </button>
            </Link>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Payout
