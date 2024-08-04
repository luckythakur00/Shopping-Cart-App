import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Cart from './Components/Cart'

function App() {

  return (
    <div className='min-h-screen w-screen bg-black/90 text-white'>
      <Header />
      <div className='min-h-96 sm:min-h-3/5' >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route />
        </Routes>
      </div>
      <div className='min-h-48 w-full mt-20 ' >
        <Footer />
      </div>
    </div>
  )
}

export default App