import React from 'react';
import man_1 from '../../assets/man-1.jpg'
import man_2 from '../../assets/man-2.jpg'
import wman_3 from '../../assets/wman-3.jpg'
import { Link } from 'react-router-dom';
const Rating = () => {
    const rating = <>
        <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
        <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" />
        <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
        <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" checked />
        <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
    </>
    return (
        <>

            <div className='container my-24'>
                <h1 className="font-bold text-4xl text-center">customar Review -(3)</h1>
                <div className="card mt-32 w-auto  grid grid-cols-3 gap-10">
                    <div className="card-body ms-12 h-96 w-10/12 bg-base-100 shadow-lg">
                        <img className='h-28 w-28 ms-16 rounded-full' src={man_1} alt="" />
                        <h3 className='font-bold text-2xl text-center'>Dr. Michael</h3>
                        <p className='indent-8 text-ellipsis'>Lenovo's Yoga 9i Gen 8 delivers leading performance combination of features and design that makes it the premium 2-in-1 laptop to buy.</p>

                        <div className="card-actions justify-center ">
                            <div className="rating gap-2">
                                {rating}
                                <Link to='/review' className='btn btn-primary ms-4'>more...</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-body ms-12 h-96 w-10/12 bg-base-100 shadow-lg">
                        <img className='h-28 w-28 ms-16 rounded-full' src={wman_3} alt="" />
                        <h3 className='font-bold text-2xl text-center'>programmer Sophia.</h3>
                        <p className='indent-8 text-ellipsis'>Overall good computer does what is advertised while being at a cheap cost. Easy setup and would recommend.

                            What is the Primary Use of this Product? Gaming.</p>

                        <div className="card-actions justify-center ">
                            <div className="rating gap-2">
                                {rating}
                                <Link to='/review' className='btn btn-primary ms-4'>more...</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card-body ms-12 h-96 w-10/12 bg-base-100 shadow-lg">
                        <img className='h-28 w-28 ms-16 rounded-full' src={man_2} alt="" />
                        <h3 className='font-bold text-2xl text-center'>professor Luca</h3>
                        <p className='indent-8 text-ellipsis'>One of the best computers one can get. So affordable and good specifications.

                            What is the Primary Use of this Product? Work.</p>

                        <div className="card-actions justify-center ">
                            <div className="rating gap-2">
                                {rating}
                                <Link to='/review' className='btn btn-primary ms-4'>more...</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hero-content'>
                    <Link to='/review' className="font-bold text-xl text-center uppercase btn btn-primary">see more all review...</Link>

                </div>
            </div>

        </>
    );
};

export default Rating;