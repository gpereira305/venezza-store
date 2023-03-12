import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/StoreMessages/StoreMessage';
import exit from "../../assets/icons/exit-icon.svg";
import trash from "../../assets/icons/trash.svg";
import { addToCart } from '../../actions/cartActions';
import './store_cartpage.css';

import placeholder from '../../assets/images/products/product-12.jpg'

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
    <main className="store__container">
      <div className="store__product-cart store_minheight--positon">
           <Link className="store__product-details--goback" to={"/"}>
              <img src={exit} alt="Sair" />
              Voltar
          </Link>
          <br />
          <br /> 
           <div>
              <div style={{display: 'flex',justifyContent:'center', marginBottom: '60px' }}>
                <h1>Carrinho</h1>
              </div>

              <ul style={{display: 'flex', flexDirection: 'column'}}>
                {cartItems.length && cartItems.map((item, i) => (
                    <li key={i} style={{display: 'flex',justifyContent:'space-between', alignItems: 'flex-start', marginBottom: '10px', paddingBottom: '10px', borderBottom: '1px solid tomato' }}>
                      <div style={{display: 'flex', gap: '20px'}}>
                          <img src={item.image} alt={item.name} title={item.name} style={{maxWidth: '100px'}}/>
                          <div>
                            <h2>{item.name}</h2>
                              <p>Cor: Cinza escuro</p>
                              <p>Tam: M</p>
                            <p>Preço: R$ {item.price} à vista</p>
                          </div>
                      </div> 
                      <img src={trash} alt="Deletar" title='Deletar esse item'/> 
                    </li>  
                ))}
              </ul>
           </div> 
      </div>
    </main>
  )
}

export default StoreCartpage;