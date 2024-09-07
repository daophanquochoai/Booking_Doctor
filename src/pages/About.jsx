import React from 'react';
import {assets} from "../assets/assets_frontend/assets.js";

const About = () => {
    return (
        <div>
            <div className={'text-center text-2xl pt-10 text-gray-500'}>
                <p>
                    ABOUT
                    <span className={'text-gray-700 font-medium'}>US</span>
                </p>
            </div>
            <div className={'my-10 flex flex-col md:flex-row gap-12'}>
                <img src={assets.about_image} alt={''} className={'w-full md:max-w-[360px]'}/>
                <div className={'flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'}>
                    <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs Conveniently And Efficiently</p>
                    <p>At Prescripto, We understand The Challenges Individuals Face When It Comes To Scheduling Doctor</p>
                    <p>Appointments And Managing Their Healthy Records</p>
                    <b className={'text-gray-800'}>Our version</b>
                    <p>Our Version of the doctor booking platform is designed to offer a seamless, patient-centered experience. We've tailored the process to ensure simplicity, efficiency, and convenience for both patients and healthcare providers. With intuitive scheduling, personalized doctor recommendations, and real-time availability updates, our platform streamlines the entire booking process.</p>
                </div>
            </div>
            <div className={'text-xl my-4'}>
                <p>WHY <span className={'text-gray-700 font-semibold'}>CHOOSE US</span></p>
            </div>
            <div className={'flex flex-col md:flex-row mb-20'}>
                <div className={'border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'}>
                    <b>Efficiency</b>
                    <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
                </div>
                <div className={'border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'}>
                    <b>Convenience</b>
                    <p>Access to a network of trusted healthcare professionals in your area.</p>
                </div>
                <div className={'border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'}>
                    <b>Personalization</b>
                    <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
                </div>
            </div>
        </div>
    );
};

export default About;