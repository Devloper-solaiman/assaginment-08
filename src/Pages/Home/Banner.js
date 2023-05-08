import React from 'react';
import loptopBanner from '../../assets/loptops.jpg'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <section>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={loptopBanner} alt='#' className="max-w-lg rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">ThinkPad X13</h1>
                        <h3 className='text-2xl font-bold pt-3'>The ultimate in mobile productivity</h3>
                        <p className="py-3 w-10/12 font-semibold">The ThinkPad X13 Gen 2 13" Intel laptop offers the best mix of mobility and performance. Thin and light, it features all-day battery life and optional 5G connectivity, so you can take it just about anywhere. Its 11th Gen Intel Core vPro processor with Iris Xe graphics enables up to 32GB LPDDR4x RAM, for fast, powerful performance. Dual Thunderbolt 4 ports round out the package, while everything is protected by top-notch security features. Plus, with the Intel Evo platform, you get a super-responsive device that’s ready whenever you need it.</p>
                        <Link className='btn btn-primary' to='/blogs'> More details </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;