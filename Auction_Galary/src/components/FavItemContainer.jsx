import React from 'react';
import { MdCancel } from "react-icons/md";


const FavItemContainer = ({bData}) => {
   
    return (
        <div className=' flex justify-center items-center gap-2 mb-5 mt-3 font-semibold'>
            <div><img className='w-10 h-13' src={bData.image} alt="" /></div>
            <div>
                <p>{bData.title}</p>
                

                <div>
                    <p>${bData.currentBidPrice}</p>
                    <p>Bids:{bData.bidsCount}</p>
                </div>

            </div>
            <div>
                <p><MdCancel /></p>
            </div>
        </div>
    );
};

export default FavItemContainer;