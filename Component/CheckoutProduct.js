import React from 'react'
import {useStateValue} from '../StateProvider'
function CheckoutProduct({id , title , pricing, image, rating}){
    const [{},dispatch] = useStateValue();
    console.log(id)
    const removefrombasket = ()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className="checkoutproduct">
                <img src={image} alt="product image"/>
                <div className="checkoutproduct_info">
                <p className="checkoutproduct_title">{title}</p>
            <p className-="checkoutproduct_price">
                <small>Rs</small>
                <strong>{pricing}</strong>
            </p>

            <div className="checkoutproduct_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_)=>(
                    <span>💛</span>
                    ))
                }
            </div>
            <button onClick={removefrombasket}>Remove from the basket</button>
                </div>
        </div>
    )
}

export default CheckoutProduct