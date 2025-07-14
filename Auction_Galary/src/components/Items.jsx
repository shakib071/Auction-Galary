import React from 'react';
import BannerImage from '../assets/images/Banner-min.jpg';
import { CiHeart } from "react-icons/ci";

const Items = () => {
    return (
        <div className='bg-[rgba(128,128,128,.05)]'>

            <p>Active Auction</p>
            <p>Discover and bid on extraordinary items</p>
            

            <div className='bg-white'>

                <div className="overflow-x-auto">
                <table className="table table-xs table-pin-rows table-pin-cols">
                    <thead>
                    <tr>
                        <th>Items</th>
                        <th></th>
                        <th>Current Bid</th>
                        <th>Time Left</th>
                        <th>Bid Now</th>
                     
                    </tr>
                    </thead>
                    <tbody>

                    <tr>
    

                        <td className='w-6'><img src={BannerImage} alt="" /></td>
                        <td className='text-[15px]'>Vintage Leica M3 Camera</td>
                        <td className='text-[15px]'>$2,850</td>
                        <td className='text-[15px]'>2 Days left</td>
                        <td className='text-2xl '><CiHeart /></td>

                    </tr>

                    <tr>
    

                        <td className='w-6'><img src={BannerImage} alt="" /></td>
                        <td className='text-[15px]'>Vintage Leica M3 Camera</td>
                        <td className='text-[15px]'>$2,850</td>
                        <td className='text-[15px]'>2 Days left</td>
                        <td className='text-2xl '><CiHeart /></td>

                    </tr>

                    <tr>
    

                        <td className='w-6'><img src={BannerImage} alt="" /></td>
                        <td className='text-[15px]'>Vintage Leica M3 Camera</td>
                        <td className='text-[15px]'>$2,850</td>
                        <td className='text-[15px]'>2 Days left</td>
                        <td className='text-2xl '><CiHeart /></td>

                    </tr>
               
                    </tbody>

                </table>
                </div>

            </div>

        </div>
    );
};

export default Items;