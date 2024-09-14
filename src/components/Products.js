import React, { useEffect, useState } from 'react'
import { addToCart } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
const Products = () => {
    const dispatch = useDispatch();

        const[products,setProducts] = useState([]);
        useEffect(()=>{
            const fetchProducts = async()=>{
                
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            
                setProducts(data);
            
            };
            fetchProducts();
        },[])

       const  handleAdd = (product)=>{
            dispatch(addToCart(product));
        }



  return (

    <div className='productsWrapper'>

        {
            products.map((product)=>{
                return(
                    <div className='card' key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <h4>{product.title}</h4>
                        <p>{product.price}</p>
                        <button  onClick={()=>handleAdd(product)} className='btn'>Add to cart</button>
                    </div>
                )
            })  
        }
    </div>

  )
}

export default Products
