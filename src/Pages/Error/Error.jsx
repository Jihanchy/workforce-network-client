import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex flex-col w-3/6 mx-auto text-center space-y-4 items-center justify-center min-h-screen'>
            <h2 className='text-9xl font-bold'>404</h2>
            <p className='text-3xl font-semibold'>The page you are looking for does not exist</p>
            <Link to='/'><button className='btn'>Back to Home page</button></Link>
        </div>
    );
};

export default Error;