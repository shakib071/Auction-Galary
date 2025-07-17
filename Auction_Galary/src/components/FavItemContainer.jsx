import React from 'react';
import { MdCancel } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";


const FavItemContainer = ({bData,handleRemove}) => {
    console.log(bData);
    return (
        <div className='w-[80%] lg:w-[100%] mr-2 mx-auto flex justify-center items-center gap-4 lg:gap-2 mb-5 mt-3 font-semibold'>
            <div className='w-[10%] '><img className='w-12 h-12 xl:w-22 xl:h-12 rounded-xl' src={bData.image} alt="" /></div>
            <div className='w-[70%] sm:w-[50%] text-[12px] sm:text-[16px] lg:text-[14px] xl:text-[15px] 2xl:text-[17px]'>
                <p>{bData.title}</p>
                

                <div className='flex justify-between items-center'>
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