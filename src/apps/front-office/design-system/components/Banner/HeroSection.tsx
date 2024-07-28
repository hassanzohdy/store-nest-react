// src/components/HeroSection.jsx

import React, { FC } from 'react';
import Feature from './Features';
const HeroSection: FC = () => {
    return (

        <section>
            <div className="p-6 lg:flex relative rounded-lg mx-5 bg-[url('../../../../../../public/assets/banner-10.png')] bg-no-repeat bg-center p-[50px] bg-cover">

                <div className="relative md:text-2xl block items-start w-full ">
                    <div className='md:max-w-[50%] lg:max-w-[100%]'>
                        <h2 className="mb-4 text-[#253D4E] font-bold leading-[1.2] text-lg md:text-3xl font-roboto lg:text-3xl ">
                            Stay home & get your daily needs from our shop
                        </h2>
                        <p className="md:text-lg mb-4 font-normal text-sm text-[#7E7E7E] ">
                            Start Your Daily Shopping with Nest Mart <span className='text-[#3BB77E]'>Nest Mart</span>
                        </p>
                    </div>

                    <form action="" className='z-50 relative font-roboto w-full md:max-w-[370px] h-12 flex rounded-[50px] mt-[120px] md:mt-[50px] lg:h-[70px] lg:'>

                        <input
                            type="email"
                            placeholder="Your email address"
                            className=" shadow-none text-base w-full border-0 rounded-[50px] pl-[58px] "
                        />
                        <button className="absolute h-full right-0 text-white px-4 text-base bg-[#3BB77E] border-0 rounded-full font-bold  lg:px-8">
                            Subscribe
                        </button>
                    </form>
                </div>
                <img src="../../../../../../public/assets/banner-9.png" className='w-1/2 md:w-[350px] max-w-xl absolute right-[3rem] bottom-10 md:right-0 md:bottom-20 w-[200px]  lg:bottom-0' alt="" />
            </div>

            <div className="mt-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <Feature imageSrc="../../../../../../public/assets/icon-1.svg" title="Best prices & offers" description="Orders $50 or more" />
                <Feature imageSrc="../../../../../../public/assets/icon-2.svg" title="Free delivery" description="24/7 amazing services" />
                <Feature imageSrc="../../../../../../public/assets/icon-3.svg" title="Great daily deal" description="When you sign up" />
                <Feature imageSrc="../../../../../../public/assets/icon-4.svg" title="Wide assortment" description="Mega Discounts" />
                <Feature imageSrc="../../../../../../public/assets/icon-5.svg" title="Easy returns" description="Within 30 days" />
            </div>
        </section>



    );
};

export default HeroSection;
