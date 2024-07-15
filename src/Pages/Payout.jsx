import { useState } from "react"
import { useCart } from "../CartContext"
import { useForm } from "react-hook-form"
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
  const { state, dispatch } = useCart() // Use cart state and dispatch
  const { cartItems } = state
  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    // Call the provided handleSubmit function with the form data
    handleSubmit(data)
  }
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    email: "",
    phoneNumber: "",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
    orderNotes: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Order placed:", { ...form, cartItems })
    dispatch({ type: "CLEAR_CART" })
    setOpen(true)
  }

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )
  return (
    <>
      <div>
        <div className="md:flex max-w-full h-14 mt-5 px-28 text-black text-base font-[Poppins] hidden">
          <div className="flex items-center text-sm ">
            <Link to="/">
              <h2 className="hover:text-[#E22367] active:text-blue-500">
                Home
              </h2>
              <RiArrowDropRightLine className="text-2xl" />
            </Link>
            <div className="flex ml-1">
              <Link to="/">
                <h2 className="hover:text-[#E22367] active:text-blue-500">
                  Products Listing
                </h2>
                <RiArrowDropRightLine className="text-xl" />
              </Link>
            </div>
            <div className="flex ml-1">
              <Link to="/">
                <h2 className="hover:text-[#E22367] active:text-blue-500">
                  Computers & Tablets
                </h2>
                <RiArrowDropRightLine className="text-xl" />
              </Link>
            </div>
            <div className="flex ml-1">
              <h2 className="hover:text-[#E22367] active:text-blue-500">
                Cart
              </h2>
              <RiArrowDropRightLine className="text-xl" />
            </div>
            <div className="flex ml-1">
              <h2 className="hover:text-[#E22367] active:text-blue-500">
                Checkout
              </h2>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="md:text-xl lg:text-xl text-lg font-bold mt-6 md:ml-8 ">
            Billing Information
          </h2>
          <div className="mt-4 md:px-28 lg:px-28 px-5 flex gap-12 ">
            <div className="md:flex lg:flex md:flex-row lg:flex-row  md:justify-between lg:justify-between">
              <form
                action=""
                onSubmit={handleFormSubmit(onSubmit)}
                className="mt-4"
              >
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
                      name="firstName"
                      {...register("firstName", {
                        required: "First Name is required",
                      })}
                      value={form.firstName}
                      onChange={handleChange}
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                        errors.firstName ? "border-red-500" : ""
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    {...register("lastName", {
                      required: "Last Name is required",
                    })}
                    value={form.lastName}
                    onChange={handleChange}
                    className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                      errors.lastName ? "border-red-500" : ""
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
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
                    name="companyName"
                    {...register("companyName")}
                    value={form.companyName}
                    onChange={handleChange}
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
                    name="address"
                    {...register("address", {
                      required: "Address is required",
                    })}
                    value={form.address}
                    onChange={handleChange}
                    className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                      errors.address ? "border-red-500" : ""
                    }`}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.address.message}
                    </p>
                  )}
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
                      name="country"
                      onChange={handleChange}
                      {...register("country", {
                        required: "Country is required",
                      })}
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                        errors.country ? "border-red-500" : ""
                      }`}
                    >
                      {errors.country && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.country.message}
                        </p>
                      )}

                      <option>Select...</option>
                      <option>USA</option>
                      <option>Canada</option>
                      <option>UK</option>
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
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      {...register("state", { required: "State is required" })}
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                        errors.state ? "border-red-500" : ""
                      }`}
                    >
                      {errors.state && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.state.message}
                        </p>
                      )}
                      <option>Select...</option>
                      <option>California</option>
                      <option>Texas</option>
                      <option>New York</option>
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
                      value={form.city}
                      onChange={handleChange}
                      {...register("city", { required: "City is required" })}
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                        errors.city ? "border-red-500" : ""
                      }`}
                    />
                    {errors.city && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.city.message}
                      </p>
                    )}
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
                      value={form.zipCode}
                      onChange={handleChange}
                      {...register("zipCode", {
                        required: "Zip Code is required",
                      })}
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                        errors.zipCode ? "border-red-500" : ""
                      }`}
                    />
                    {errors.zipCode && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.zipCode.message}
                      </p>
                    )}
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
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      {...register("email", { required: "Email is required" })}
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
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
                      name="phoneNumber"
                      {...register("phoneNumber")}
                      onChange={handleChange}
                      {...register("phoneNumber", {
                        required: "Phone Number is required",
                      })}
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                        errors.phoneNumber ? "border-red-500" : ""
                      }`}
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phoneNumber.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="ship-different"
                      name="shipDifferent"
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
                      <img src={Card} alt="" className="mr-2 w-5 h-5" />{" "}
                      Debit/Credit Card
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
                      name="cardName"
                      value={form.cardName}
                      onChange={handleChange}
                      {...register("cardName", {
                        required: "Card Name is required",
                      })}
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                        errors.cardName ? "border-red-500" : ""
                      }`}
                    />
                    {errors.cardName && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.cardName.message}
                      </p>
                    )}
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
                      name="cardNumber"
                      value={form.cardNumber}
                      onChange={handleChange}
                      {...register("cardNumber", {
                        required: "Card Number is required",
                      })}
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                        errors.cardNumber ? "border-red-500" : ""
                      }`}
                    />
                    {errors.cardNumber && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.cardNumber.message}
                      </p>
                    )}
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
                      name="cardExpiry"
                      value={form.cardExpiry}
                      onChange={handleChange}
                      {...register("cardExpiry", {
                        required: "Card Expiry is required",
                      })}
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                        errors.cardExpiry ? "border-red-500" : ""
                      }`}
                    />
                    {errors.cardExpiry && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.cardExpiry.message}
                      </p>
                    )}
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
                      name="cardCVC"
                      value={form.cardCVC}
                      onChange={handleChange}
                      {...register("cardCVC", {
                        required: "Card CVC is required",
                      })}
                      className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                        errors.cardCVC ? "border-red-500" : ""
                      }`}
                    />
                    {errors.cardCVC && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.cardCVC.message}
                      </p>
                    )}
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
                    name="orderNotes"
                    rows="4"
                    {...register("orderNotes")}
                    value={form.orderNotes}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Notes about your order, e.g. special notes for delivery"
                  ></textarea>
                </div>
              </form>
              

              <div className="bg-[#fcfcfc] border-none shadow-sm rounded-sm w-full h-auto md:w-1/3 lg:w-1/3 px-4 py-5 md:mr-0 lg:mr-0 mt-6 md:mt-0 lg:mt-0">
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
                        1{" "}
                        <span className="text-xs text-blue-700"> x $134.5</span>
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
                    <span>{totalAmount.toFixed(2)} USD</span>
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
