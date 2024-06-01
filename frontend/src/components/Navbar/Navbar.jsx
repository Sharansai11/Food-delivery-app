import React, { useContext, useState } from 'react'
import'./Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
const Navbar = ({setshowLogin}) => {
    let [menu,Setmenu]=useState("home")
    const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <div className='navbar'>
      <Link to='/'>   <img src={assets.logo} alt=""  className='logo'/></Link>

    <ul className='navbar-menu'>  
   <Link to='/' onClick={()=>Setmenu("home")} className={menu=="home"?"active":""}>Home</Link>
   <a href='#exploremenu' onClick={()=>Setmenu("menu")} className={menu=="menu"?"active":""}> Menu</a >
   <a  onClick={()=>Setmenu("mobileapp")} className={menu=="mobileapp"?"active":""}>Mobile app </ a>
   <a href='#footer' onClick={()=>Setmenu("contact us")} className={menu=="contact us"?"active":""}>Contact us</a >
   </ul>
    <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link> 
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
       <button onClick={()=>setshowLogin(true)}>sign in</button>
    </div>
    </div>
  )
}

export default Navbar
