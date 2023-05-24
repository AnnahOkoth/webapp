import React from 'react';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';

function Filters() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center w-full">
      <div className="flex flex-wrap justify-start gap-3">
        <div className="rounded-full pl-2 pr-2 border-2">
          <select className="cursor-pointer">
            <option>Headphone Type</option>
            <option>Wireless</option>
            <option>AirPro wireless</option>
            <option>Mini wireless</option>
            <option>New Arrivals</option>
            <option>F9 Wireless</option>
          </select>
        </div>
        <div className="rounded-full pl-2 pr-2 border-2">
          <select className="cursor-pointer">
            <option>Price</option>
            <option>1000</option>
            <option>2000</option>
            <option>1000</option>
            <option>1000</option>
          </select>
        </div>
        <div className="rounded-full pl-2 pr-2 border-2">
          <select className="cursor-pointer">
            <option>Review</option>
            <option></option>
          </select>
        </div>
        <div className="rounded-full pl-2 pr-2 border-2">
          <select className="cursor-pointer">
            <option>Color</option>
            <option>black</option>
            <option>white</option>
            <option>yellow</option>
            <option>pink</option>
          </select>
        </div>
        <div className="rounded-full pl-2 pr-2 border-2">
          <select className="cursor-pointer">
            <option>Material</option>
            <option>Leather</option>
            <option></option>
          </select>
        </div>
        <div className="rounded-full pl-2 pr-2 border-2">
          <select className="cursor-pointer">
            <option>Offer</option>
          </select>
        </div>
        <div className="rounded-full pl-2 pr-2 flex items-center gap-2 border-2">
          <span>All Filters</span>
          <HiAdjustmentsHorizontal />
        </div>
      </div>
      <div className="mt-4 md:mt-0">
        <div className="rounded-full pl-2 pr-2 border-2">
          <select>
            <option>Sort by</option>
            <option>Color</option>
            <option>Headphones Type</option>
            <option>Price</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filters;
