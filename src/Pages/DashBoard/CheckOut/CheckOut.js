import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const CheckOut = () => {
  const [userInfo, setUserInfo] = useContext(UserContext);
  const [checkOut, setCheckOut] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/showPackages/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCheckOut(data[0]);
        const newData = { ...userInfo };
        newData.selectedPackage = data[0];
        setUserInfo(newData);
      });
  }, [id]);

  console.log(userInfo);

  return (
    <div>
      <table class="table p-4 mx-auto my-28 bg-white shadow rounded-lg">
        <thead>
          <tr>
            <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Sr. No.
            </th>
            <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Package Name
            </th>
            <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Package Price
            </th>
            <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
              Duration
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-gray-700">
            <td class="border-b-2 p-4 dark:border-dark-5">1</td>
            <td class="border-b-2 p-4 dark:border-dark-5">{checkOut.name}</td>
            <td class="border-b-2 p-4 dark:border-dark-5">
              {"$" + checkOut.price}
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
              {"$" + checkOut.duration}
            </td>
          </tr>
        </tbody>
        <Link to="/shipment"><button className="p-2 mt-2 bg-purple-700 rounded text-white center">Go To Shipment</button></Link>
      </table>
     
    </div>
  );
};

export default CheckOut;
