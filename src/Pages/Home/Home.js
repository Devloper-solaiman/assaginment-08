import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import Footer from '../Shared/Footer';
import Rating from './Rating';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Rating></Rating>
            <Footer></Footer>

        </div>
    );
};

export default Home;