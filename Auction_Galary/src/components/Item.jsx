import React from 'react';
import { CiHeart } from "react-icons/ci";



const Item = ({item , handleBidData}) => {

    
    return (
        <>
             <tr>
                
            
                <td className='w-6'><img className='w-10 h-9' src={item.image} alt="" /></td>
                <td className='text-[15px]'>{item.title}</td>
                <td className='text-[15px]'>{item.currentBidPrice}</td>
                <td className='text-[15px]'>2 Days left</td>
                <td onClick={()=> handleBidData(item)} className='text-2xl '><CiHeart /></td>
            
             </tr>
        </>
    );
};

export default Item;