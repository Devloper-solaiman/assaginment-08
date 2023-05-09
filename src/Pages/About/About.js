import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h4 className='text-xl font-semibold text-center my-28'>I am  programming learner . I know Html, CSS, JavaScript, Bootstrap, Tailwind, react</h4>
            <h1 className='text-center my-10 uppercase'><Link className='btn btn-primary px-7' to='https://convart-any-file-to-html.netlify.app/?fbclid=IwAR2eW2Amv6m6YYkO9FkP42FlYUN-ZAceBHtJasIxdhaFgqzXsucsmKY3fg4'>See My Resume</Link></h1>
        </div>
    );
};

export default About;