import React from 'react';
import { MdCancel } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";


const FavItemContainer = ({bData,handleRemove}) => {
    console.log(bData);
    return (
        <div className=' w-[70%] mx-auto flex justify-center items-center gap-2 mb-5 mt-3 font-semibold'>
            <div className='w-[10%]'><img className='w-12 h-12 rounded-xl' src={bData.image} alt="" /></div>
            <div className='w-[50%]'>
                <p>{bData.title}</p>
                

                <div className=''>
                    <p>${bData.currentBidPrice}</p>
                    <p>Bids:{bData.bidsCount}</p>
                </div>

            </div>
            <div className=''>
                <button onClick={()=> handleRemove(bData.id)}  className='cursor-pointer'><RxCross2 /></button>
            </div>
        </div>
    );
};

export default FavItemContainer;