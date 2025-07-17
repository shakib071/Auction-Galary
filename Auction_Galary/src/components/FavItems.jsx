import React from 'react';
// import { useState } from 'react';

import { CiHeart } from "react-icons/ci";
import './FavItems.css'; 
import FavItemContainer from './FavItemContainer';


const FavItems = ({bidData,handleRemove}) => {

    let totalBids = 0;



    for(let i=0; i<bidData.length; i++) {
        totalBids += bidData[i].currentBidPrice;
    }
    
    return (
        <div className='mt-7 lg:mt-0'>


            <div className='flex justify-center items-center gap-2 mb-5 mt-3 font-bold'>
                <p className='text-2xl sm:text-2xl'><CiHeart></CiHeart></p>
                <p className='text-lg sm:text-xl lg:text-lg'>Favorite Items</p>
            </div>

            {
                bidData.length === 0 ? (
                    <div className='text-center '>
                    <p className='font-bold xl:text-lg'>No favorites yet</p>
                    <p className='mb-3 text-[14px] xl:text-lg'>
                        Click the heart icon on any item to  add <br /> it to your favorites
                    </p>
                    </div>
                ) : ''
            }

            

            


            

            {bidData.map(bData => (
                
                <FavItemContainer className='' key = {bData.id} bData = {bData} handleRemove={handleRemove}></FavItemContainer>
            ))}

            <hr />

            <div className='flex justify-center gap-15 my-5 font-semibold'>

                <p className='lg:text-[17px]'>Total bids Amount</p>
                <p className='lg:text-[17px]'>${totalBids}</p>

            </div>


        </div>
    );
};

export default FavItems;