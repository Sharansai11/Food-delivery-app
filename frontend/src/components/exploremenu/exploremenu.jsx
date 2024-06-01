import React from 'react'
import './exploremenu.css'
import { menu_list } from '../../assets/assets'
const Exploremenu = ({category,setcategory}) => {
  return (
    <div className='exploremenu' id='exploremenu'>
        <h1>Explore Our Mneu</h1>
        <p className='exp-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ducimus praesentium laudantium exercitationem necessitatibus? Temporibus quam ipsam unde eaque commodi.
        </p>
        <div className="expmenu-list">
           { menu_list.map((item,index)=>{
                return(
                  <div onClick={()=>setcategory(prev=>prev===item.menu_name?"all":item.menu_name)} key={index}className="expmenu-list-item">
                    <img className={category===item.menu_name?"active":""}src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                  </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default Exploremenu