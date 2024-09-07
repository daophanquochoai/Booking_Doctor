import React from 'react';
import {assets} from "../assets/assets_frontend/assets.js";

const Footer = () => {
    return (
        <div className={'md:mx-10'}>
            <div className={'flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'}>
                {/* left */}
                <div>
                    <img src={assets.logo} alt={'logo'} className={'mb-5 w-40'}/>
                    <p className={'w-full md:w-2/3 text-gray-600 leading-6'}>Book an appointment with your preferred doctor today and receive timely reminders for your upcoming visits, all through our easy-to-use online scheduling platform.</p>
                </div>
                {/* center */}
                <div>
                    <p className={'text-xl font-medium mb-5'}>COMPANY</p>
                    <ul className={'flex flex-col gap-2 text-gray-600'}>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                {/* right */}
                <div>
                    <p className={'text-xl font-medium mb-6'}>GET IN TOUCH</p>
                    <ul className={'flex flex-col gap-2 font-medium'}>
                        <li>0779 127 667</li>
                        <li>dpquochoai@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className={'py-5 text-sm text-center'}>Copyright 2024@ Prescripto - All right Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;