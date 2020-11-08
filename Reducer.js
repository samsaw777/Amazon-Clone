export const initialState = {
    basket:[],
    user: null,
};

export const reducer = (state, action)=>{
    console.log(action);
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user: action.user,
            }
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket:[...state.basket, action.item]
            }
            //Logic to add to the basket
        break;
        case 'REMOVE_FROM_BASKET':
            // clone the basket in the newBasket
            let newBasket = [...state.basket]
            //  checking if the product exist or not
            const index = state.basket.findIndex((basketItem)=>
                basketItem.id === action.id
         )

         if (index >=0) {
            newBasket.splice(index,1)
         }else{
            console.warn(`Cannot remove the product as the ${action.id} is not in the basket`)
         }
            return {...state, basket:newBasket}

        break;
        default:
            return state;

    }
}