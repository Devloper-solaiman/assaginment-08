import { useEffect, useState } from 'react';
import RatingData from './RatingData';
import { Link } from 'react-router-dom';


const Rating = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    return (

        <div className='container my-24'>
            <h1 className="font-bold text-4xl text-center">customar Review -(3)</h1>
            <div className="card mt-32 w-auto  grid grid-cols-3 gap-10">
                {
                    users.slice(0, 3).map(user => <RatingData
                        key={user._id}
                        user={user}
                    ></RatingData>)
                }
            </div>
            <div className='hero-content'>
                <Link to='/review' className="font-bold text-xl text-center uppercase btn btn-primary">see more all review...</Link>

            </div>
        </div>




    );
};

export default Rating;