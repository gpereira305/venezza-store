import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Message from '../../components/StoreMessages/StoreMessage';
import exit from "../../assets/icons/exit-icon.svg";
import trash from "../../assets/icons/trash.svg";
import { addToCart } from '../../actions/cartActions';
import './store_cartpage.css';
import StoreGoback from '../../components/common/StoreGoback/StoreGoback';
import StoreGoTop from '../../components/common/StoreGoTop';

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
  }, [dispatch, productId, qty]);

    // manter a navegação no topo ao trocar de página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRemoveFromCart = (id) => {
     console.log('remove!!!')
  }


  return (
    <main className="store__container">
      <div className="cart store_minheight--position">
        <StoreGoback/>

          <ul className='cart-list'>
               {!cartItems.length ?  (
                  <div className='cart-list__empty-cart'>
                     <h1 className='cart-list__empty-title'>
                        Seu carrinho está vazio...
                     </h1>
                  </div>
               ) :cartItems.map((item) => (
               <li className='cart-items' key={item.name}>
                    <div className='items-wrapper'>
                         <img className='cart-items__product-img'
                            src={item.image}
                            alt={item.name}
                            title={item.name}
                         />
                         <div className='user-actions'>
                              <div className='user-actions__details'>
                                 <Link className='user-actions__details-name' to= {`/product/${item.product}`}>
                                    {item.name}
                                 </Link>
                                 <p className='user-actions__details-price'>
                                    Preço: <span>R$ {item.price} à vista</span>
                                 </p>
                              </div>
                              <form className="user-actions__form" value={qty} onChange={(e)=>
                                 dispatch(addToCart(item.product, Number(e.target.value)))}>
                                 <select className="user-actions__form-select">
                                    <option value="Selecione">Selecione</option>
                                    {[...Array(item.countInStock).keys()].map(q => (
                                       <option key={q + 1} value={q + 1}>
                                          {q + 1}
                                       </option>
                                    ))}
                                 </select>
                                 <img className='user-actions__form-delete'
                                    onClick={handleRemoveFromCart}
                                    src={trash}
                                    alt="Deletar"
                                    title='Deletar esse item'
                                 />
                              </form>
                         </div>
                    </div>
               </li>
               ))}
          </ul>
      </div>
      <StoreGoTop />
    </main>
  )
}

export default StoreCartpage;