import React from 'react';

const PackageDetails = ({pack, handleClick}) => {
    return (
        <div>
             <div className="bg-gray-100">
        <div class="p-4 text-center bg-green-100 border rounded shadow-lg">
          <img className="rounded" src={pack.imageUrl} alt="" />
          <p className="text-center text-md font-semibold pt-2 text-gray-700 tracking-wide">
            {pack.name}
          </p>
          <h2 className="text-center text-xl font-bold text-gray-700 tracking-wide mt-2">
            {pack.duration}
          </h2>
          <p class="text-gray-700 mb-2 font-medium">
            from {pack.price + " BDT"}
          </p>{" "}

          <button onClick={()=> handleClick(pack._id)} className="p-2 text-white bg-purple-900 rounded-md">
            Book Now
          </button>
        </div>
      </div>
        </div>
    );
};

export default PackageDetails;