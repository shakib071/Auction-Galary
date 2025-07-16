import React from 'react';

const Banner = () => {
    return (
        <div className=' bg-[url("./assets/images/Banner-min.jpg")] bg-cover bg-center h-full px-5 py-20 w-full text-white mx-auto'>
            
            <div className='w-[50%]'>
                <p className='text-2xl font-medium'>Bid on Unique Items from Around the World</p>
                <p className='mt-3 font-[300] text-[14px]'>Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
                <button className='cursor-pointer mt-5  border-1 px-4 py-1 rounded-xl text-black bg-white'> Explore Auctions</button>
            </div>
            

        </div>
    );
};

export default Banner;