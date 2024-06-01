import React, { useState } from 'react';
import './home.css';
import Header from '../../components/header/header'; // Capitalize component name
import Exploremenu from '../../components/exploremenu/exploremenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
const Home = () => { // Capitalize component name
    const [category,setcategory]=useState("all");
  return (
    <div className='home'>
      <Header /> {/* Capitalize component name */}
      <Exploremenu category={category} setcategory={setcategory}/>
      <FoodDisplay category={category}/>
    </div>
  );
};

export default Home; // Capitalize component name
