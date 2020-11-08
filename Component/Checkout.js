import React from 'react';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from './CheckoutProduct.js'
import Subtotal from './Subtotal.js'
function Checkout(){
    const  [{basket}] = useStateValue()
    return(
        <div className="checkout">
            <div className="checkout_left">
            <img 
            className='checkout_ad' 
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
            alt="advertisment_image"
            />
            {basket?.length=== 0 ? (
                <div className='checkout_title'>
                    <h2>Your Shopping Basket is empty.</h2>
                    <p>You have no items in your basket. To buy one or more items, click on the "Add to the basket" near the item.</p>
                </div>
            ):(
                <div>
                    <h2 className="checkout_title">Your Shopping basket</h2>
                    {basket?.map(item => (
                        <CheckoutProduct 
                        id =  {item.id}
                        title = {item.title}
                        image = {item.image}
                        pricing = {item.pricing}
                        rating = {item.rating}
                        />
                        ))}
                </div>
            )}

            </div>
                {basket.length>0 && (
                <div className="checkout_right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout