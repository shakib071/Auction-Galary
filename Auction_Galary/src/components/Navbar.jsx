import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

const navbar = () => {
    return (
        
        <div className='w-[98%] sm:w-[95%] mx-auto'>
            
            <div className='flex justify-between items-center py-2 sm:py-3'>

                <div>
                    <p className='text-[11px] sm:text-xl lg:text-2xl xl:text-4xl font-medium  text-[rgba(0,62,164,1)]'>Auction<span className='text-[rgba(255,211,55,1)]'>Galary</span></p>
                </div>

                <div className='pl-2 md:pl-0 flex justify-center gap-2 sm:gap-6 text-[10px] sm:text-[16px] lg:text-lg xl:text-xl items-center'>
                    <p>Home</p>
                    <p>Auctions</p>
                    <p>Categories</p>
                    <p>How to works</p>
                </div>

                <div className='flex justify-center items-center gap-2 sm:gap-3 '>
                  
                  <p className='text-2xl lg:text-3xl xl:text-4xl'><IoMdNotificationsOutline /> </p>
                  <p className='text-xl lg:text-[27px] xl:text-4xl'><FaRegUserCircle /></p>
                </div>

            </div>

        </div>
    );
};

export default navbar;