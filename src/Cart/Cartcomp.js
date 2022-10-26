import React from 'react'
import {  useCart } from "react-use-cart";
import {
    Link
  } from "react-router-dom";
  import './cart.css';


const Cartcomp = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
      } = useCart();
      if (isEmpty) return <p>Your cart is empty</p>;
  return (
    <div>
     
    
        <div className='container-fluid'>
        <div className="row">
            <div className="col-md-12">
                <h4>cart({totalUniqueItems}) total Items:({totalItems} )</h4>
                <ul>
    {items.map((item) => (
        <div key={item.id} >
            <div className="row crtbg">
                <div className="col-md-2">
                <img className='cart-img' src={item.img} alt="" />
                
                </div>
                <div className="col-md-2 ">
                <h5 className='title' >{item.title}</h5>
                </div>
                <div className="col-md-2">
                <h4 className='price'>{item.price}</h4>
                </div>
                <div className="col-md-2">
                <h5 className='quantity'>Quantity({item.quantity})</h5>
                </div>
                <div className="col-md-2">
                    <div className='crtbtn'>
                    <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="btn btn-secondary"> -</button>

                    <button  onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="btn btn-secondary"> +</button>
                    <button  onClick={() => removeItem(item.id)} className="btn btn-secondary"> &times;</button>
                 
                

                    </div>
                
                </div>
            </div>
            <hr />

        </div>

     
      
    ))}
  </ul>
  
  
            </div>
        </div>
        <div>
    {/* <h4 className=''>total price:$ {cartTotal}</h4> */}
  </div>
  <div>
  <button onClick={()=>emptyCart()} className="btn btn-error">clear cart</button>
   
  </div>
        <br />
    </div>

    </div>
  )
}

export default Cartcomp;
