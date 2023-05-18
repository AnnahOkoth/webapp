import React from 'react'
import { HiAdjustmentsHorizontal } from "react-icons/hi2";


function Filters() {
  return (
    <div  className='flex justify-around w-full'>
        <div  className='flex justify-start gap-3'>
            <div className='rounded-full pl-2 pr-2 border-2'>
                <select className='cursor-pointer'>
                    <option>Headphone Type</option>
                </select>
            </div>
            <div className='rounded-full pl-2 pr-2 border-2'>
                <select className='cursor-pointer'>
                    <option>Price</option>
                </select>
            </div>
            <div className='rounded-full pl-2 pr-2 border-2'>
                <select className='cursor-pointer'>
                    <option>Review</option>
                </select>
            </div>
            <div className='rounded-full pl-2 pr-2 border-2'>
                <select className='cursor-pointer'>
                    <option>Color</option>
                </select>
            </div>
            <div className='rounded-full pl-2 pr-2 border-2'>
                <select className='cursor-pointer'>
                    <option>Material</option>
                </select>
            </div>
            <div className='rounded-full pl-2 pr-2 border-2'>
                <select className='cursor-pointer'>
                    <option>Offer</option>
                </select>
            </div>
            <div className='rounded-full pl-2 pr-2  flex items-center gap-2 border-2'>
                <span>All Filters</span>
                <HiAdjustmentsHorizontal />
            </div>
        </div>
        <div>
            <div className='rounded-full pl-2 pr-2 border-2'>
                <select>
                    <option>Sort by</option>
                </select>
            </div>
        </div>
        
    </div>
  )
}

export default Filters