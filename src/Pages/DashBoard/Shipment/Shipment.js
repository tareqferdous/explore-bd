import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Shipment = () => {
    const [userInfo, setUserInfo] = useContext(UserContext)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => { 
       const newData = {...userInfo}
       newData.shipmentData = data;
       setUserInfo(newData)

       if(userInfo.shipmentData){
        fetch(`http://localhost:4000/placeOrder`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data){
                alert('Order Placed Successfully!')
            }
        })
       }
    }
    return (
        <section>
            <div className="flex flex-col md:flex-row justify-center">
                
                <div className="lg:w-2/5">
                    <Sidebar></Sidebar>
                </div>
                <div className="lg:w-3/5">
                <form className="pt-10" onSubmit={handleSubmit(onSubmit)}>
                    <input
                      className="w-2/3 px-5 my-2 py-1 text-gray-700 bg-gray-200 rounded"
                      placeholder=" Name"
                      type="text"
                      name="name"
                      {...register("name")}
                    />
                    <br />
                    
                    <input
                      className="w-2/3 my-2 p-3 px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      placeholder="Phone No."
                      type="text"
                      name="phone"
                      {...register("phone")}
                    />
                   
                    <br />
                    <input
                      className="w-2/3 my-2 p-3 px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      placeholder="Email"
                      type="email"
                      name="email"
                      {...register("email")}
                    />

                    <br />

                    <input
                      className="w-2/3 my-2 p-3 px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      placeholder="Your Address"
                      type="text"
                      name="address"
                      {...register("address")}
                    />

                    <br />
                   
                    <input
                      className="p-2 text-lg rounded text-white bg-red-400"
                      type="submit"
                    />
                  </form>
                </div>
              
            </div>
        </section>
    );
};

export default Shipment;