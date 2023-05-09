import React, { useEffect, useState } from 'react';
import ReviewData from './ReviewData';
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const Review = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <>
            <Navbar></Navbar>
            <div className='container my-24'>
                <h1 className="font-bold text-4xl text-center">customar Review</h1>
                <div className="card mt-32 w-auto  grid grid-cols-3 gap-10">
                    {
                        users.map(user => <ReviewData
                            key={user._id}
                            user={user}
                        ></ReviewData>)
                    }
                </div>
                <div className='hero-content'>

                </div>
            </div>
        </>
    );
};

export default Review;