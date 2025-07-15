import './App.css'
import { useState } from 'react';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Items from './components/Items'
import FavItems from './components/FavItems'
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

      <div>
          <Items handleBidData = {handleBidData}></Items>
          <FavItems bidData = {bidData} handleRemove = {handleRemove} ></FavItems>
      </div>

      <Footer></Footer>

      


    </>
  )
}

export default App