import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import Fooditem from '../Fooditem/Fooditem';
const FoodDisplay = ({category}) => {
    const { food_list } = useContext(StoreContext);
    return (
        <div className='fooddisplay' id='fooddisplay'>
            <h2>Top dishes near you</h2>
            <div className="foodDisplayList">
                {food_list.map((item, index) => {
                    if(category==='all' || category===item.category){
                        return (
                        <Fooditem
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    );
                    }
                    
                })}
            </div>
        </div>
    );
}

export default FoodDisplay;