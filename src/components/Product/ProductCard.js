import { CiStar, CiHeart } from "react-icons/ci"
import { IoEyeOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import { useCart } from "../../CartContext"
import { ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const ProductCard = ({ product }) => {
//  const notifyAddToCart = () => {
//    toast.success("Product Successfully added to Cart", {
//      position: "top-center",
//      autoClose: 2000,
//      hideProgressBar: true,
//      closeOnClick: true,
//      pauseOnHover: true,
//      draggable: true,
//      progress: undefined,
//      style: {
//        backgroundColor: "green",
//        color: "white",
//        width: "100vw", 
//        maxWidth: "100%", 
//        textAlign: "center",
//      },
//    })
//  }

//  const notifyAddToWishlist = () => {
//    toast.success("Product Successfully added to Wishlist", {
//      position: "top-center",
//      autoClose: 2000,
//      hideProgressBar: true,
//      closeOnClick: true,
//      pauseOnHover: true,
//      draggable: true,
//      progress: undefined,
//      style: { backgroundColor: "green", color: "white" },
//    })
//  }

  const { dispatch } = useCart()
  // const imageUrl = `https://api.timbu.cloud/images/${product.photos[0].url}`
  const handleAddToCart = (product) => {
    const productWithNumberPrice = {
      ...product,
      price: Number(product?.current_price?.[0]?.USD?.[0] || 0),
    }
    dispatch({ type: "ADD_TO_CART", payload: productWithNumberPrice })
    
  }
const fallbackImage = "path/to/fallback-image.jpg"

// Check if product and its photos are valid before rendering
const imageUrl = product?.photos?.[0]?.url
  ? `https://api.timbu.cloud/images/${product.photos[0].url}`
  : fallbackImage


  
  console.log("Product Data:", product)
  console.log("Image URL:", imageUrl)

  return (
    <div className="border border-gray-100 px-6 md:w-[200px] md:h-[430px] lg:w-[300px] lg:h-[430px] pb-4 mt-6 rounded-md hover:shadow-md">
      <div className="group">
        <div className="flex justify-end items-center mt-4">
          <span className="border-none shadow-sm p-2 invisible group-hover:visible bg-[#E22367] rounded-lg w-11 h-10 text-white">
            50%
          </span>
        </div>
        <div>
          <img
            src={imageUrl}
            height={160}
            alt={product.name || "Product Image"}
            className="md:w-[150px] md:h-[150px] lg:w-[230px] lg:h-[220px]"
          />
          <div className="flex p-0">
            <button
              onClick={() => handleAddToCart(product)}
              className="border-none shadow-sm p-2 invisible group-hover:visible bg-[#E22367] rounded-lg text-white"
            >
              Add to Cart
            </button>
            <Link to="/cartpage">
              <IoEyeOutline className="text-3xl ml-3 invisible group-hover:visible text-[#E22367]" />
            </Link>
            <CiHeart className="text-3xl ml-3 invisible group-hover:visible text-[#E22367]" />
            <ToastContainer />
          </div>
          <div>
            <h1 className="text-gray-400">{product.category}</h1>
            <p className="text-xs font-bold mt-1">{product.name}</p>
            <div className="flex mt-1">
              {[...Array(product.rating)].map((_, i) => (
                <CiStar key={i} />
              ))}
              <span className="text-xs">[{product.reviews}]</span>
            </div>
            <div className="mt-1 flex">
              <p className="text-sm">
                ${product?.current_price?.[0]?.USD?.[0] || 0}{" "}
              </p>
              <p className="text-sm text-gray-400 ml-3">
                {product.originalPrice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
