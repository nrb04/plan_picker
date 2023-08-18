import React from 'react';
import sucessfulAnimi from "../assets/o10dGPQ5Jo.json"
import Lottie  from 'lottie-react';
import { Link } from 'react-router-dom';

const Successful = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='md:w-1/3 w-full'>
            <Lottie animationData={sucessfulAnimi} loop={true} />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-semibold'>Your schedule is Successfull</h1>
                <p>Check your email and see when your meet up , Thank you for using Plan Picker </p>
                <Link to="/">Back To Home</Link>
            </div>
        </div>
    );
};

export default Successful;