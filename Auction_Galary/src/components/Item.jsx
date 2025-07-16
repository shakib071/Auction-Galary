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
                
            
                <td className='w-6'><img className='w-10 h-9' src={item.image} alt="" /></td>
                <td className='text-[15px]'>{item.title}</td>
                <td className='text-[15px]'>{item.currentBidPrice}</td>
                <td className='text-[15px]'>2 Days left</td>
                <td><button onClick={()=> {handleBidData(item);handleClick()}}  className={`text-2xl ${clicked ? 'cursor-not-allowed ' : 'cursor-pointer'}`} disabled={clicked}>{ clicked ? <FaHeart color={'red'} /> : <CiHeart size={30}/>}</button></td>
            
             </tr>
        </>
    );
};

export default Item;