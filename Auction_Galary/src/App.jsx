import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Items from './components/Items'
import FavItems from './components/FavItems'
import Footer from './components/Footer'

function App() {
  
  const handleBidData = (item) => {
    console.log(item.id);
  }

  return (
    <>
     
      <Navbar></Navbar>
      <Banner></Banner>

      <div>
          <Items handleBidData = {handleBidData}></Items>
          <FavItems></FavItems>
      </div>

      <Footer></Footer>

      


    </>
  )
}

export default App