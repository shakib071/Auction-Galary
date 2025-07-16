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
        <div className='mt-7'>


            <div className='flex justify-center items-center gap-2 mb-5 mt-3 font-bold'>
                <p><CiHeart></CiHeart></p>
                <p>Favorite Items</p>
            </div>

            <div className='text-center'>
                <p className='font-bold'>No favorites yet</p>
                <p className='mb-3'>Click the heart icon on any item to <br /> add it to your favorites</p>
            </div>

            

            {bidData.map(bData => (
                
                <FavItemContainer className='' key = {bData.id} bData = {bData} handleRemove={handleRemove}></FavItemContainer>
            ))}

            <hr />

            <div className='flex justify-center gap-15 my-5 font-semibold'>

                <p>Total bids Amount</p>
                <p>${totalBids}</p>

            </div>


        </div>
    );
};

export default FavItems;