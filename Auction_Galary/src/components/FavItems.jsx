import React from 'react';
import { CiHeart } from "react-icons/ci";

import './FavItems.css'; 

const FavItems = ({bidData}) => {
    console.log(bidData)
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

            <hr />

            <div className='flex justify-center gap-15 my-5 font-semibold'>

                <p>Total bids Amount</p>
                <p>$0000</p>

            </div>


        </div>
    );
};

export default FavItems;