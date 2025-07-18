import React from 'react';
import { useEffect, useState } from 'react';
import BannerImage from '../assets/images/Banner-min.jpg';
import { CiHeart } from "react-icons/ci";
import Item from './Item';

const Items = ({handleBidData}) => {

    // console.log(handleBidData);

    const [items, setItems] = useState([]);

    useEffect(()=> {

        fetch('items.json')
        .then(res => res.json())
        .then(data => setItems(data))
    }, []);

   

    return (
        <div className='  mt-2 mx-auto grid justify-center items-center bg-[rgba(128,128,128,.05)]'>

          

            

            <div className='bg-white'>

                <div className="overflow-x-auto">
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <thead className=''>
                    <tr className=' sm:text-lg md:text-xl lg:text-xl xl:text-[22px] 2xl:text-3xl border-2 border-gray-600 text-center'>
                        <th className='xl:py-4'>Items</th>
                        <th></th>
                        <th>Current Bid</th>
                        <th>Time Left</th>
                        <th>Bid Now</th>
                     
                    </tr>
                    </thead>


                    <tbody>



                    {items.map(item=> (
                        <Item key = {item.id} handleBidData={handleBidData} item = {item}></Item>
                    ))}
               
                    </tbody>

                </table>
                </div>

            </div>

        </div>
    );
};

export default Items;