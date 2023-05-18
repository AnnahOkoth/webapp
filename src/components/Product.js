import React from 'react'

function Product({image, rating, productName, description}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={image}
        alt="Product Image"
      />
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {rating} ★
          </span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Like
          </button>
        </div>
        <div className="font-bold text-xl ">{productName}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 py-1 mb-4">
        <button className="border-2 border-gray-500 hover:bg-green-700 hover:text-white text-black font-bold py-1 px-4 rounded-full">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Product