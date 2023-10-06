import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementItem, incrementItem } from '../store.js/cart/cartActions';

function Cart() {

  const { cart, cartCount } = useSelector((state) => state.cart)

   const cartAmount = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].quantity * cart[i].price;

    }
    return sum
  }, [cart])

  const dispatch = useDispatch()

  return (
    <div>
      <div className="col"><h4><b>Shopping Cart</b></h4></div>

      {cart.map((item) => {


        return (

          <div className="row" key={item.id}>
            <div className="row main align-items-center">
              <div className="col-2"><img className="img-fluid" src={item.image} alt={item.title} /></div>
              <div className="col">
                <div className="row text-muted">{item.category}</div>
                <div className="row">{item.title}</div>
              </div>
              <div className="col">
                <button onClick={() => dispatch(decrementItem(item))}>-</button><span className="border">  {item.quantity}  </span><button onClick={() => dispatch(incrementItem(item))}>+</button>
              </div>
              <div className="col">$ {item.price}<span className="close">&#10005;</span>{item.quantity}</div>
            </div>
            <hr />

          </div>
        )
      })}


      <p style={{ marginLeft: "350px" }}> total <span style={{ marginLeft: "230px" }}>{`${cartCount}`}</span><span style={{ marginLeft: "350px" }}>${` ${cartAmount}`}</span></p>
    </div>
  )
}

export default Cart