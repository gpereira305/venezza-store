import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/StoreMessages/StoreMessage';
import { addToCart } from '../../actions/cartActions';

const StoreCartpage = ( ) => {
  const params = useParams();  
  let location = useLocation();
  const dispatch = useDispatch();

  const productId = params.id;
  const qty = location.search ? +location.search.split('=')[1] : 1;

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  console.log(cartItems)

  useEffect(() => {
     if(productId) {
      dispatch(addToCart(productId, qty))
     }
  }, [dispatch, productId, qty])


  return (
    <main>
      <h1>cart</h1>
    </main>
  )
}

export default StoreCartpage;