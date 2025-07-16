import React from 'react';

const Banner = () => {
    return (
        <div className=' bg-[url("./assets/images/Banner-min.jpg")] bg-cover bg-center h-full px-3 py-9 sm:px-10 sm:py-20 xl:py-25 xl:px-15 w-full text-white mx-auto'>
            
            <div className='w-[50%]'>
                <p className='text-sm sm:text-xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium'>Bid on Unique Items from Around the World</p>
                <p className='mt-3 font-[300] text-[11px] sm:text-[14px] lg:text-xl xl:text-2xl 2xl:text-3xl'>Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
                <button className='cursor-pointer text-[10px] sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl mt-5  border-1 px-4 py-1 lg:py-2 rounded-xl text-black bg-white'> Explore Auctions</button>
            </div>
            

        </div>
    );
};

export default Banner;