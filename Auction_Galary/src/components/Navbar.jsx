import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";

const navbar = () => {
    return (
        
        <div className='w-[90%] mx-auto'>
            
            <div className='flex justify-between items-center py-3'>

                <div>
                    <p className='text-xl font-medium  text-[rgba(0,62,164,1)]'>Auction<span className='text-[rgba(255,211,55,1)]'>Galary</span></p>
                </div>

                <div className='flex justify-center gap-4 text-[16px]] items-center'>
                    <p>Home</p>
                    <p>Auctions</p>
                    <p>Categories</p>
                    <p>How to works</p>
                </div>

                <div className='flex justify-center items-center gap-2 '>
                  
                  <p className='text-3xl'><IoMdNotificationsOutline /> </p>
                  <p className='text-[27px]'><FaRegUserCircle /></p>
                </div>

            </div>

        </div>
    );
};

export default navbar;