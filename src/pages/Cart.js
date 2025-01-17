import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice';
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const removeI = (productId) => {
    dispatch(remove(productId))
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
      {
            products.map((product)=>{
                return(
                    <div className='cartCard' key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <h4>{product.title}</h4>
                        <p>{product.price}</p>
                        <button onClick={ () => removeI(product.id)} className='btn'>Remove</button>
                    </div>
                )
            })  
        }
      </div>
    </div>
  )
}

export default Cart
