import React from 'react'
import Product from './Product'

function Products() {
    const data=[
        {
            id:1,
            image:'pods.jpg',
            rating:"4.5",
            productName:"Wireless Earburds",
            description:"Organic Cotton, fairtrade certified."
        },
        {
            id:2,
            image:'prod-2.jpg',
            rating:"4.8",
            productName:"Wireless Earburds",
            description:"Organic Cotton, fairtrade certified."
        },
        {
            id:3,
            image:'prod3.jpg',
            rating:"3.8",
            productName:"Wireless Earburds",
            description:"Organic Cotton, fairtrade certified."
        },
    ]
  return (
    <div className='flex flex-col gap-4'>
        <h1 className='text-xl text-bold'>Headphones For You!</h1>
        <div className='flex gap-3'>
            {data.map((product) => (
            <Product
            key={product.id}
            image={product.image}
            rating={product.rating}
            productName={product.productName}
            description={product.description}
            />
        ))}
        </div>
        <div className='flex gap-3'>
            {data.map((product) => (
            <Product
            key={product.id}
            image={product.image}
            rating={product.rating}
            productName={product.productName}
            description={product.description}
            />
        ))}
        </div>
    </div>
  )
}

export default Products