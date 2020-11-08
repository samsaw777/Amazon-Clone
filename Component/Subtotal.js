import React from 'react'
// import CurrencyFormat from 'react-currency-format'
// import { useStateValue } from '../StateProvider'
function Subtotal(){
    // const [{basket},dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <h1>Subtotal</h1>
            {/* Price and button to checkout */}
            {/* <CurrencyFormat 
            renderText={(value)=>{
                <>
                
                </>
            }}
            decimalScale={2}
            value={}
            displaySeparator={true}
            prefix={"Rs"}
            
            /> */}
            <button>Proceed to check out</button>
        </div>
    )
}

export default Subtotal