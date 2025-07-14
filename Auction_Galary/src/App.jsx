import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Items from './components/Items'
import FavItems from './components/FavItems'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
     
      <Navbar></Navbar>
      <Banner></Banner>

      <div>
          <Items></Items>
          <FavItems></FavItems>
      </div>

      <Footer></Footer>

      


    </>
  )
}

export default App