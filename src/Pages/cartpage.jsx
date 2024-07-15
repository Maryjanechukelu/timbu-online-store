// src/pages/CartPage.js

import { Link } from "react-router-dom"
import { RiArrowDropRightLine } from "react-icons/ri"
import { useCart } from "../CartContext"

const CartPage = ({ product }) => {
  const { state, dispatch } = useCart()
  const { cartItems } = state

  const handleIncrement = (id) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: { id } })
  }

  const handleDecrement = (id) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: { id } })
  }

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } })
  }

  const fallbackImage = "path/to/fallback-image.jpg"

  // Check if product and its photos are valid before rendering
  const imageUrl = product?.photos?.[0]?.url
    ? `https://api.timbu.cloud/images/${product.photos[0].url}`
    : fallbackImage

  // const handleClearCart = () => {
  //   dispatch({ type: 'CLEAR_CART' });
  // };

  return (
    <>
      <div>
        <div className="md:flex md:justify-between items-center max-w-full md:h-14 mt-5 md:px-28 text-black text-base font-[Poppins]">
          <div className="md:flex items-center text-sm hidden ">
            <Link to="/">
              <div className="flex ml-1">
                <h2 className="hover:text-[#E22367] active:text-blue-500">
                  Home
                </h2>
                <RiArrowDropRightLine className="text-xl" />
              </div>
            </Link>
            <Link to="/">
              <div className="flex ml-1">
                <h2 className="hover:text-[#E22367] active:text-blue-500">
                  Products Listing
                </h2>
                <RiArrowDropRightLine className="text-xl" />
              </div>
            </Link>
            <Link to="/">
              <div className="flex ml-1">
                <h2 className="hover:text-[#E22367] active:text-blue-500">
                  Computers & Tablets
                </h2>
                <RiArrowDropRightLine className="text-xl" />
              </div>
            </Link>
            <Link to="/cartpage">
              <div className="flex ml-1">
                <h2 className="hover:text-[#E22367] active:text-blue-500">
                  Cart
                </h2>
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-5 md:px-28 lg:px-28 px-5">
          <h1 className="font-bold text-xl">Cart Page</h1>
          <div className="md:flex lg:flex md:justify-between lg:justify-between mt-4 gap-6">
            <div className="bg-[#fcfcfc] border-none shadow-sm rounded-sm w-full h-auto md:w-2/3 lg:w-2/3 px-6 py-8">
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div
                    className="flex justify-between space-x-6 mb-6"
                    key={item.id}
                  >
                    <div>
                      <img
                        src={imageUrl}
                        alt={item.name || "Product Image"}
                        className="w-[120px]"
                      />
                    </div>
                    <div className="flex-1 mt-3">
                      <p className="md:text-sm lg:text-sm text-xs font-bold">
                        {item.name}
                      </p>

                      <button
                        onClick={() => handleDecrement(item.id)}
                        className="bg-gray-200 px-2 py-1 rounded mt-3"
                      >
                        -
                      </button>

                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() => handleIncrement(item.id)}
                        className="bg-gray-200 px-2 py-1 rounded mt-3"
                      >
                        +
                      </button>

                      <div className="flex items-center mt-3 gap-3">
                        <span className="text-xs text-gray-500 cursor-pointer">
                          Move to Favourite
                        </span>

                        <span
                          className="text-xs text-gray-500 cursor-pointer"
                          onClick={() => handleRemove(item.id)}
                        >
                          Delete
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-extrabold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))
              )}
            </div>
            <div className="bg-[#fcfcfc] border-none shadow-sm rounded-sm w-full md:w-1/3 lg:w-1/3 px-4 py-5 md:mr-0 lg:mr-0 mt-6 md:mt-0 lg:mt-0">
              <h1 className="font-bold text-lg">Order Summary</h1>
              <p className="text-sm mt-2">Do you have a promo code?</p>
              {cartItems.map((item, index) => (
                <div
                  className="flex justify-between space-x-6 mt-3"
                  key={index}
                >
                  <div>
                    <img src={item.image} alt="" className="w-[120px]" />
                  </div>
                  <div className="">
                    <p className="text-xs font-bold">{item.name}</p>
                    <p className="text-xs mt-2">
                      {item.quantity}{" "}
                      <span className="text-xs text-blue-700">
                        {" "}
                        x ${item.price.toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-gray-700">Sub-total</span>
                  <span>
                    $
                    {cartItems
                      .reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </span>
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
                  <span>
                    $
                    {(
                      cartItems.reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      ) -
                      56 +
                      5.99
                    ).toFixed(2)}{" "}
                    USD
                  </span>
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
