import React from 'react'
import '../App.css';
import {useStateValue } from '../StateProvider'
function Product({id, title, image, pricing, rating, orders}){
    const [{},dispatch] = useStateValue();
    const addToBasket = ()=>{
        //Add items to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id:id,
                title: title,
                image:image,
                pricing: pricing,
                rating:rating,
                orders: orders,
            },
        });
    };
    return(
        <div className="Product">
            <p>{title}</p>
            <p className-="Product_price">
                <small>Rs</small>
                <strong>{pricing}</strong>
            </p>

            <div className="Product_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_)=>(
                    <span>💛</span>
                    ))
                }
                <p>({orders})</p>
            </div>

            <img src={image} alt="sample"/>
            <button onClick={addToBasket}>Add to cart</button>
        </div>
    )
}

export default Product