import React from 'react';
import{ useState } from 'react';
import { FaHeart } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";





const Item = ({item , handleBidData}) => {

    const [clicked , setClicked] = useState(false);

   const handleClick = () => {
        setClicked(true);
        console.log('clicked');
   }
    
    return (
        <>
             <tr className=' border-2 border-gray-600 text-center'>
                
            
                <td className=''><img className='w-10 h-10 rounded-xl' src={item.image} alt="" /></td>
                <td className='xl:py-4 sm:text-[15px] md:text-lg lg:text-[18px] xl:text-[20px]  2xl:text-[24px] text-left'>{item.title}</td>
                <td className='sm:text-[15px] md:tetx-lg lg:text-[18px] xl:text-[20px] 2xl:text-[24px]'>{item.currentBidPrice}</td>
                <td className='sm:text-[15px] md:text-lg lg:text-[18px] xl:text-[20px] 2xl:text-[24px]'>2 Days left</td>
                <td><button onClick={()=> {handleBidData(item);handleClick()}}  className={`text-2xl ${clicked ? 'cursor-not-allowed ' : 'cursor-pointer'}`} disabled={clicked}>{ clicked ? <FaHeart color={'red'} /> : <CiHeart size={30}/>}</button></td>
            
             </tr>
        </>
    );
};

export default Item;