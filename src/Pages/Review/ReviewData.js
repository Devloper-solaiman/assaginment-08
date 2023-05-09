import React from 'react';
import { Link } from 'react-router-dom';

const ReviewData = ({ user }) => {
    const rating = <>
        <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
        <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" />
        <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
        <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" checked />
        <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
    </>
    return (
        <div>
            <div className="card-body ms-12 h-96 w-10/12 bg-base-100 shadow-lg">
                <img className='h-28 w-28 ms-16 rounded-full' src={user.img} alt="" />
                <h3 className='font-bold text-2xl text-center'>{user.name}</h3>
                <p className='indent-8 text-ellipsis'>{user.detail}</p>
                <div className="card-actions justify-center ">
                    <div className="rating gap-2">
                        {rating}
                        <Link to='/blogs' className='btn btn-primary ms-4'>more...</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewData;