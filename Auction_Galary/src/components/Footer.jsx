import React from 'react';

const Footer = () => {
    return (
        <div className='py-12 text-center'>

            <p className='text-xl text-center font-semibold text-[rgba(0,62,164,1)]'>Auction<span className='text-[rgba(255,211,55,1)]'>Galary</span></p>

            


            <div className='flex justify-center gap-2'>
                <p>Bid.</p>
                <p> Win.</p>
                <p> Own.</p>
            </div>

            <div className='flex justify-center
            gap-6'>
                <p>Home</p>
                <p>Auctions</p>
                <p>Categories</p>
                <p>How to works</p>
            </div>

            <p>© 2025 AuctionHub. All rights reserved.</p>

        </div>
    );
};

export default Footer;