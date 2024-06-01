import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import Home from './pages/home/home'; // Capitalize component name
import Cart from './pages/cart/cart'; // Capitalize component name
import Placeholder from './pages/placeorder/placeholder'; // Capitalize component name
import Footer from './components/footer/footer';
import LoginPopup from './components/LoginPopup/LoginPopup'
const App = () => {
  const [showLogin ,setshowLogin]=useState(false);
  return (
    <> 
     {showLogin?<LoginPopup setshowLogin={setshowLogin}/>:<div></div>}
    <div className='app'>
      <Navbar setshowLogin={setshowLogin} />
      <Routes>
        <Route  path='/' element={<Home />} /> {/* Capitalize component name */}
        <Route path='/cart' element={<Cart />} /> {/* Capitalize component name */}
        <Route path='/placeholder' element={<Placeholder />} /> {/* Capitalize component name */}
      </Routes>
     
    </div>
     <Footer/> 
     </>
    
  );
};

export default App;
