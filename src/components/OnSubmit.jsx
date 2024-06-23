import React from 'react';
import icon from '../assets/icon-success.svg';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function OnSubmit() {
    const location = useLocation();
    const {email}=location.state;
    return (
        <div className='bg-charcoal-grey flex justify-center items-center align-middle text-center w-full h-screen'>
            <div className='flex flex-col justify-start items-center bg-white w-[450px] h-auto px-8 py-6 rounded-2xl'>
                <div className='flex items-start justify-start w-full mb-[20px]'>
                    <img src={icon} alt="Success Icon" />
                </div>
                <div className='flex items-start justify-start w-full mb-[30px]'>
                    <h1 className='text-charcoal-grey text-6xl font-bold font-roboto'>Thanks for subscribing!</h1>
                </div>
                <div className='flex items-start justify-start w-full text-md mb-[30px]'>
                    <p>A confirmation email has been sent to <span className='font-bold'>{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
                </div>
                <div className='flex items-center justify-center w-full text-lg mb-[20px]'>
                    <NavLink to="/" className='hover:bg-tomato hover:shadow-xl flex items-center justify-center text-center px-10 py-3 w-full h-[45px] rounded-xl text-white bg-charcoal-grey'>
                        Dismiss message
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default OnSubmit;
