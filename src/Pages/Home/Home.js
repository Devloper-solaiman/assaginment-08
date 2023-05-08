import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Review></Review>

        </div>
    );
};

export default Home;