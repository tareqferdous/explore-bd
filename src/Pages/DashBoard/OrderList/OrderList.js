import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/orderList`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, []);

  const handleClick = (id) =>{
    fetch(`http://localhost:4000/delete/${id}`,{
      method: 'DELETE'
    })
    .then(response => response.json())
  }


  return (
    <section>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="lg:w-2/5">
          <Sidebar></Sidebar>
        </div>
        <div className="lg:w-3/5">
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
                  User
                </th>
                <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>

            {
                  orders.map((order, index) =>       
                    <tr key={order._id}>
                        <td>{index+1}</td>
                        <td>{order.shipmentData.name}</td>
                        <td>{order.shipmentData.email}</td>
                        <td>{order.status}</td>
                        <td><button onClick={()=>handleClick(order._id)} className="bg-red-500 p-1 text-white rounded">Delete</button></td>
                    </tr>
                    )
                }
                
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default OrderList;
