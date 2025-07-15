import React from 'react';
import { MdCancel } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";


const FavItemContainer = ({bData,handleRemove}) => {
    console.log(bData);
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
                <button onClick={()=> handleRemove(bData.id)}  className='cursor-pointer'><RxCross2 /></button>
            </div>
        </div>
    );
};

export default FavItemContainer;