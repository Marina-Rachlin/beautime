import React, { useState } from "react";

const AddToWishlistButton = ({ product, customIcon }) => {
  const [wishlist, setWishlist] = useState([]);

  // Function to add a product to the wishlist
  const addToWishlist = () => {
    setWishlist([...wishlist, product]);
  };

  return (
      <button onClick={addToWishlist} className="wishlist">
        {customIcon ? (
          customIcon
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={13}
            height={13}
            viewBox="0 0 13 13"
          >
            <g clipPath="url(#clip0_1106_270)">
              <path d="M11.1281 2.35735C10.8248 2.03132 10.4577 1.77117 10.0496 1.59305C9.64144 1.41493 9.20104 1.32266 8.75574 1.32197C8.31008 1.32248 7.86929 1.41462 7.46073 1.59266C7.05218 1.7707 6.6846 2.03084 6.38081 2.35692L6.17153 2.57807L5.96225 2.35692C4.74378 1.04552 2.69289 0.970207 1.38151 2.18868C1.32339 2.24269 1.26727 2.29881 1.21326 2.35692C-0.0793057 3.75111 -0.0793057 5.90577 1.21326 7.29996L5.86398 12.2044C6.02488 12.3743 6.29301 12.3816 6.46288 12.2207C6.46844 12.2154 6.47385 12.21 6.47911 12.2044L11.1281 7.29996C12.4206 5.90592 12.4206 3.75139 11.1281 2.35735ZM10.5151 6.7166H10.5147L6.17153 11.2974L1.82797 6.7166C0.840522 5.65131 0.840522 4.00515 1.82797 2.93986C2.72468 1.96795 4.23954 1.90701 5.21144 2.80373C5.25862 2.84726 5.30404 2.89268 5.34757 2.93986L5.86398 3.48467C6.03416 3.65376 6.30893 3.65376 6.47911 3.48467L6.99552 2.94028C7.89224 1.96838 9.40709 1.90744 10.379 2.80415C10.4262 2.84769 10.4716 2.8931 10.5151 2.94028C11.5112 4.00726 11.5185 5.65642 10.5151 6.7166Z" />
            </g>
          </svg>
        )}
      </button>
  );
};

export default AddToWishlistButton;
