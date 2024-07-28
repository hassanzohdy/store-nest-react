import React, { FC } from 'react';

interface FeatureProps {
    imageSrc: string;
    title: string;
    description: string;
}

const Feature: FC<FeatureProps> = ({ imageSrc, title, description }) => {
    return (
        <div className="cursor-pointer  flex items-center space-x-2 bg-[#F4F6FA] p-4 rounded-lg shadow">
            <img className=' w-[60px] pr-3' src={imageSrc} alt="" />

            <div className='font-roboto '>
                <h1 className='text-[#242424] text-lg font-semibold mb-1'> {title}</h1>
                <span className='text-base font-normal leading-6 text-gray-500'>{description}</span>
            </div>


        </div>
    );
};

export default Feature;