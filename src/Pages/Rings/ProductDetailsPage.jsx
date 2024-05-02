
import React, { useState } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import ringdata from "./Data"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function ProductDetailsPage() {
  let { id } = useParams()
  const ring = ringdata.find((ring, index) => ring.id == id);
  console.log(ring)

  // console.log("the ringdata is "+ ringdata)
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }
  return (
    <>
      <div className="breadcrumb m-2 text-black"> {/* Changed breadCrumbw to breadcrumb and added text-black class */}
        <Link to="/" className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}>
        Home>
        </Link>
        <Link to="/engagement_rings" className={location.pathname.startsWith("/engagement_rings") ? "breadcrumb-active" : "breadcrumb-not-active"}>
        Products>
        </Link>
        <Link to={`/productDetails/${ring.id}`} className={location.pathname === `/productDetails/${ring.id}` ? "breadcrumb-active" : "breadcrumb-not-active"}>
          Product {ring.id}
        </Link>
      </div>

      <div className='Product Details max-w-7xl mx-auto lg:flex-row flex flex-col justify-between gap-10  '>
        <div className='Img p-3 '>
          <img src={ring.imageUrl} alt="" className='' height="400" width="400" />
          <div className='flex p-3 gap-2'>
            <div className='border-2  object-cover'><img src={ring.imageUrl} height="100" width="100" alt="" /></div>
            <div className='border-2  object-cover'><img src={ring.imageUrl} height="100" width="100" alt="" /></div>
            <div className='border-2  object-cover'><img src={ring.imageUrl} height="100" width="100" alt="" /></div>
            <div className='border-2  object-cover'><img src={ring.imageUrl} height="100" width="100" alt="" /></div>
          </div>
        </div>

        <div className='bg-[#ecf1f3] mx-auto flex-col flex p-10'>
          <h6>
            REEDS ECONIC
          </h6>
          <h1 className='girls text-3xl'>
            {ring.name} <br />
          </h1>
          <p>Item: #{ring.id}</p>
          <h3 className='text-red-800 mt-4 '> ${ring.price}</h3>
          <p className='text-lg text-red-400'> Sales Ends May 21,2024</p>

          <form className="max-w-sm ">
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Rings Size
            </label>
            <select
              id="countries"
              className=" border-[2px] border-gray-400 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose an Option... </option>
              <option value="US">7</option>
              <option value="CA">8</option>
              <option value="FR">9</option>
              <option value="DE">10</option>
              <option value="CA">8</option>
              <option value="FR">9</option>
              <option value="DE">10</option>
              <option value="CA">8</option>
              <option value="FR">9</option>
              <option value="DE">10</option>
            </select>
          </form>

          <div className='flex items-center p-3 m-3 justify-between flex-wrap'>
            <form className="max-w-xs  ">
              <h1 className='girls'>Quantity</h1>
              <div className="relative flex items-center max-w-[8rem]  m-2">
                <button
                  type="button"
                  onClick={handleDecrement}
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200  border-gray-500  p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                  </svg>
                </button>
                <input
                  type="text"
                  id="quantity-input"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border-x-0 border-gray-500 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="999"
                  value={quantity}
                  readOnly
                  required
                />
                <button
                  type="button"
                  onClick={handleIncrement}
                  className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200    p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                  </svg>
                </button>
              </div>

            </form>
            <button className='flex items-center justify-center bg-[#24414f] hover:opacity-80 p-3 text-white girls'>
              <ShoppingCartIcon fontSize='medium' /> ADD TO CART
            </button> 
          </div>
          <div className='max-w-2xl text-justify'>
            <h2 className='uppercase text-lg girls '>Description</h2>
            <p>Lorem, ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aliquid rerum maxime eligendi saepe odio repudiandae laboriosam perferendis placeat quo veritatis eveniet et praesentium, odit voluptatibus nisi facilis officiis repellat? adipisicing elit. Doloremque voluptate commodi earum nisi, rerum perferendis necessitatibus! Maxime rem eligendi nostrum, iure voluptates ipsam perferendis corporis numquam provident sint. Distinctio, cum.</p>
          </div>

        </div>

      </div>
    </>

  )
}
