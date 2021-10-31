import React from "react";
import { Link } from "react-router-dom";

const ResortDetails = ({ resort }) => {
  return (
    <div>
      <div className="bg-gray-100">
        <div class="p-4 text-center bg-blue-100 border rounded shadow-lg">
          <img className="rounded" src={resort.photo} alt="" />
          <p className="text-center text-md font-semibold pt-2 text-gray-700 tracking-wide">
            {resort.heading}
          </p>
          <h2 className="text-center text-xl font-bold text-gray-700 tracking-wide mt-2">
            {resort.title}
          </h2>
          <p class="text-gray-700 font-medium">
            Visiting Fee: {"$" + resort.price}
          </p>{" "}
          <br />
          <button className="p-2 text-white bg-purple-900 rounded-md mt-2">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResortDetails;
