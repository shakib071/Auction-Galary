import './App.css'
import { useState } from 'react';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Items from './components/Items'
import FavItems from './components/FavItems'
import Active_Auction from './components/Active_Auction'
import Footer from './components/Footer'
 import { ToastContainer, toast } from 'react-toastify';

function App() {


  const handleRemove = (id) => {
    const newData = bidData.filter((item) => item.id !== id);
    setBidData(newData);
    toast("Item removed from favorites!");
  };

  
  const [bidData,setBidData] = useState([]);
  
  const notify = () => toast("Item added to favorites!");

  const handleBidData = (item) => {
    setBidData([...bidData, item]);
    notify();
  }

 

  // console.log(bidData);

  return (
    <>
      <ToastContainer />


      <Navbar></Navbar>
      <Banner></Banner>
      <Active_Auction></Active_Auction>
      <div className='lg:w-[98%] mx-auto lg:flex lg:justify-center  lg:gap-5 '>
        <div className='lg:w-[74%]'>
          <Items   handleBidData = {handleBidData}></Items>
        </div>
        <div className='lg:w-[26%]'>
            <FavItems   bidData = {bidData} handleRemove = {handleRemove} ></FavItems>
        </div>
          

      </div>

      <Footer></Footer>

      


    </>
  )
}

export default App