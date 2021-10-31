import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const AddPackages = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState(null);

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            duration: data.duration,
            imageUrl: imageUrl,
        };

        const url = `http://localhost:4000/addPackage`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response', res))
    } 

    const handleImageUpload = event =>{
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '2fcb3e4a487e3faff20e9074db8dbc9e')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            console.log(response.data.data.display_url)
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });      
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
                      placeholder="Package Name"
                      type="text"
                      name="name"
                      {...register("name")}
                    />
                    <br />

                    <input 
                    className="w-2/3 my-2 p-3 px-5 py-1 text-gray-700 bg-gray-200 rounded" 
                    onChange={handleImageUpload} placeholder="Image" type="file" name="image" /> 

                    <br />
                    <input
                      className="w-2/3 my-2 p-3 px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      placeholder="Price"
                      type="number"
                      name="price"
                      {...register("price")}
                    />

                    <br />

                    <input
                      className="w-2/3 my-2 p-3 px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      placeholder="Tour Duration"
                      type="text"
                      name="duration"
                      {...register("duration")}
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

export default AddPackages;