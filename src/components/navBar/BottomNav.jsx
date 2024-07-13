import { useState } from "react"
import { Link } from "react-router-dom"
import { IoMenuOutline, IoClose } from "react-icons/io5"
import { RiArrowDropDownLine } from "react-icons/ri"
import { GiMonclerJacket } from "react-icons/gi"
import { NavLink } from "react-router-dom"


const Nav = () => {
  return (
    <>
      <div className="flex text-white text-xs gap-2 p-3 w-full md:hidden">
        <NavLink to="/" className="text-xs"> All Categories</NavLink>
        <NavLink to="/"> Products</NavLink>
        <NavLink to="/">Blog</NavLink>
        <NavLink to="/">Contact</NavLink>
        <NavLink to="/">Limited Sales</NavLink>
        <NavLink to="/">Best Sellers</NavLink>
        <NavLink to="/">New Arrivals</NavLink>
      </div>
    </>
  )
}

const BottomNav = () => {
  const [show, setShow] = useState(false)

  const ToggleNavbar = () => {
    setShow(!show)
  }
  
  return (
    <>
      <div className="flex justify-between items-center max-w-full h-14 mt-8 mx-auto md:px-14 lg:px-14 px-2 bg-[#E22367] text-black text-base font-[Poppins]">
        <nav className="block lg:flex md:flex items-center text-white text-sm ">
          <div className="md:hidden lg:flex flex ">
            <button onClick={ToggleNavbar}>
              {show ? (
                <IoClose className="text-white text-2xl md:invisible" />
              ) : (
                <IoMenuOutline className="text-white text-2xl" />
              )}
            </button>
          </div>
          <h2>All Categories</h2>
          <NavLink />
          <Link to="/">
          <div className="hidden md:flex lg:flex  ml-4">
            <button>Products</button>
            <RiArrowDropDownLine className="text-2xl" />
            <div></div>
          </div>
          </Link>
          <div className="hidden md:flex lg:flex ml-4">
            <h2>Blog</h2>
          </div>
          <div className="hidden md:flex lg:flex  ml-4">
            <h2>Contact</h2>
          </div>
        </nav>

        <nav className="flex justify-center items-center">
          <div className="hidden md:flex lg:flex items-center text-white text-sm">
            <h2>LIMITED SALE</h2>
            <GiMonclerJacket className="text-white text-2xl" />
            <div className="hidden md:flex lg:flex  ml-4">
              <h2>BEST SELLERS</h2>
            </div>
            <div className="hidden md:flex lg:flex  ml-4">
              <h2>NEW ARRIVALS</h2>
            </div>
          </div>
        </nav>
      </div>

      {show && (
        <div className="flex  w-full bg-[#E22367] h-full items-center">
          <Nav className="flex justify-evenly gap-3 text-white" />
        </div>
      )}
    </>
  )
};

export default BottomNav