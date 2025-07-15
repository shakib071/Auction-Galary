import './App.css'
import { useState } from 'react';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Items from './components/Items'
import FavItems from './components/FavItems'
import Footer from './components/Footer'

function App() {
  
  const [bidData,setBidData] = useState([]);


  const handleBidData = (item) => {
    setBidData([...bidData, item]);
  }

  // console.log(bidData);

  return (
    <>
     
      <Navbar></Navbar>
      <Banner></Banner>

      <div>
          <Items handleBidData = {handleBidData}></Items>
          <FavItems bidData = {bidData}></FavItems>
      </div>

      <Footer></Footer>

      


    </>
  )
}

export default App