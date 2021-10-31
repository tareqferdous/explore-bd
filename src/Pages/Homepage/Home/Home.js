import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Resorts from '../Resorts/Resorts';
import ShowPackages from '../ShowPackages/ShowPackages';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <ShowPackages></ShowPackages>
            <Resorts></Resorts>
            <Contact></Contact>
        </>
    );
};

export default Home;