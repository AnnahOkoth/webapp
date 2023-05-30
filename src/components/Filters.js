import React, {useState} from 'react';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';

function Filters() {
  const [headphoneType, setHeadphoneType] = useState('');
  const [price, setPrice] = useState('');
  const [review, setReview] = useState('');
  const [color, setColor] = useState('');
  const [material, setMaterial] = useState('');
  const [offer, setOffer] = useState('');

  const handleHeadphoneTypeChange = (e) => {
    setHeadphoneType(e.target.value);
    // Perform filtering based on the selected headphone type
    // eslint-disable-next-line no-unused-vars
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
    // Perform filtering based on the selected price
    // eslint-disable-next-line no-unused-vars
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
    // Perform filtering based on the selected review
    // eslint-disable-next-line no-unused-vars
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
    // Perform filtering based on the selected color
    // eslint-disable-next-line no-unused-vars
  };

  const handleMaterialChange = (e) => {
    setMaterial(e.target.value);
    // Perform filtering based on the selected material
    // eslint-disable-next-line no-unused-vars
  };

  const handleOfferChange = (e) => {
    setOffer(e.target.value);
    // Perform filtering based on the selected offer
    // eslint-disable-next-line no-unused-vars
  };

  const handleSortByChange = (e) => {
    const sortBy = e.target.value;
    // Perform sorting based on the selected option
    // eslint-disable-next-line no-unused-vars
  };

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
