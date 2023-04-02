import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/StoreMessages/StoreMessage';
import exit from "../../assets/icons/exit-icon.svg";
import trash from "../../assets/icons/trash.svg";
import { addToCart } from '../../actions/cartActions';
import './store_cartpage.css';

import placeholder from '../../assets/images/products/product-12.jpg'
import StoreGoback from '../../components/common/StoreGoback/StoreGoback';

const StoreCartpage = ( ) => {
  const params = useParams();  
  let location = useLocation();
  const dispatch = useDispatch();

  const productId = params.id;
  const qty = location.search ? +location.search.split('=')[1] : 1;

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart; 

  useEffect(() => {
     if(productId) {
      dispatch(addToCart(productId, qty))
     }
  }, [dispatch, productId, qty]) 


  return (
    <main className="store__container">
      <div className="cart store_minheight--position">  
        <StoreGoback/>  

          <ul className='cart__product-list'>
               {!cartItems.length ?  (
                    <div className='store__empty-cart'>
                         <h1 className='store__empty-cart--title'>Seu carrinho está vazio...</h1>
                    </div>
               ) :cartItems.map((item) => (
               <li className='cart__product-list--item' key={item.name}>
                    <div className='cart__item--wrapper'>
                         <img className='cart__item--product-img' 
                            src={item.image} 
                            alt={item.name} 
                            title={item.name}
                         />
                         <div className='cart__item--description'>
                              <h2 className='cart__description'>
                                   {item.name}
                              </h2> 
                              <p className='cart__description'>
                                   Preço: <span>R$ {item.price} à vista</span>
                              </p>
                         </div>
                    </div> 
                    <img className='cart__item--delete' 
                       src={trash} 
                       alt="Deletar" 
                       title='Deletar esse item'
                    /> 
               </li>  
               ))}
          </ul> 
      </div>
    </main>
  )
}

export default StoreCartpage;