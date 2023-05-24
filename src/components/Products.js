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
            productName:"AirPro wireless earbuds",
            description:"Organic Cotton, fairtrade certified."
        },
        {
            id:3,
            image:'blue.jpg',
            rating:"3.8",
            productName:"Mini wireless earbuds",
            description:"Organic Cotton, fairtrade certified."
        },
        {
            id:4,
            image:'prod3.jpg',
            rating:"5.8",
            productName:"New Arrivals Bluetooth",
            description:"Organic Cotton, fairtrade certified."
        },
        {
            id:5,
            image:'purple.jpg',
            rating:"6.8",
            productName:"F9 Wireless earbuds",
            description:"Organic Cotton, fairtrade certified."
        },
        {
            id:2,
            image:'prod-2.jpg',
            rating:"4.8",
            productName:"AirPro wireless earbuds",
            description:"Organic Cotton, fairtrade certified."
        },
        {
            id:3,
            image:'blue.jpg',
            rating:"3.8",
            productName:"Mini wireless earbuds",
            description:"Organic Cotton, fairtrade certified."
        },
        {
            id:4,
            image:'prod3.jpg',
            rating:"5.8",
            productName:"New Arrivals Bluetooth",
            description:"Organic Cotton, fairtrade certified."
        },
        {
            id:5,
            image:'purple.jpg',
            rating:"6.8",
            productName:"F9 Wireless earbuds",
            description:"Organic Cotton, fairtrade certified."
        },
        
    ]
  return (
    <div className='flex flex-col gap-4'>
        <h1 className='text-xl text-bold'>Headphones For You!</h1>
        <div className='flex flex-col md:grid md:grid-cols-4 lg:flex-row  gap-3'>
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