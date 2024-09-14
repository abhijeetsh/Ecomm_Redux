import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {

            // {state} ------  provides all the info about 
            // what is there in the cart (every detail)

            // {action} ------  provides all the info about what
            //  is being added to the cart (action.payload)
            // payload contains all the info about the product



            console.log('Before update:', JSON.stringify(state));
            state.push(action.payload);
            console.log('After update:', JSON.stringify(state));
            return state; // Return the updated state object
        },
        remove: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
        
}
}
)

export const { addToCart, remove } = cartSlice.actions;
export default cartSlice.reducer;