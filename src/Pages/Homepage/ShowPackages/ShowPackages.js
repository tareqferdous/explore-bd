import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import PackageDetails from '../PackageDetails/PackageDetails';

const ShowPackages = () => {
    const [packages, setPackages] = useState([])
    let history = useHistory()

    useEffect(() => {
        fetch(`http://localhost:4000/showPackages`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setPackages(data)
        })
    },[])

    const handleClick = (id) => {
        history.push(`/checkOut/${id}`)
    }

    return (
        <div className="my-16 md:mx-16 lg:mx-32 ">
            <h2 className="text-center text-purple-900 mb-8 font-bold text-3xl">Our Exclusive Packages</h2>
            <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 md:max-w-full sm:max-w-sm sm:mx-auto lg:min-w-full">
               
                {
                    packages.map((pack)=> <PackageDetails  handleClick={handleClick} key={pack._id} pack={pack} ></PackageDetails>)
                }
            </div>
        </div>
    );
};

export default ShowPackages;