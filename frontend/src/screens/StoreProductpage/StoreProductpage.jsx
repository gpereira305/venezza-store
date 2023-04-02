import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate  } from "react-router-dom";
import { useDispatch, useSelector }  from 'react-redux';
import { listProductDetails } from "../../actions/productActions"; 
import StoreSocialMedia from "../../components/common/StoreSocialMedia";
import exit from "../../assets/icons/exit-icon.svg";
import "./store_productpage.css";
import StoreLoader from "../../components/StoreMessages/StoreLoader";
import StoreMessage from "../../components/StoreMessages/StoreMessage";



const StoreProductpage = () => {
 const [qty, setQty] = useState(1); 
  const params = useParams();  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product} = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(params.id)); 
  }, [dispatch,params]); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProductInStock = [...Array(product.countInStock).keys()];

  const handleAddToCart = () => { 
    navigate(`/cart/${params.id}?qty=${qty}`); 
  }
 

  return (
    <main className="store__container">
       <div className="product-details store_minheight--positon">
          <Link className="product-details__goback" to={"/"}>
              <img src={exit} alt="Sair" />
              Voltar
          </Link>

          <div className="product-details__wrapper">
            {loading ? (<StoreLoader/>) : 
              error ? ( <StoreMessage variant={'danger'}>{error}</StoreMessage>
            ) : ( 
             <div className="product-content">
                <figure className="product-content__image">
                    <img className="product-content__image--item"  src={product.image} 
                      alt={product.name} title={product.name} 
                    />
                </figure>

                <article className="product-content__description">
                    <div className="product-content__description--details">
                        <h1 className="product-content__details--title">
                          {product.name}
                        </h1>
                        <h2 className="product-content__details--price">
                            R$ {product.price}
                        </h2>
                    </div> 
                    <span></span> 
                    <p className="product-content__description--text">
                      {product.description}
                    </p>
                    {product.countInStock > 0 ? (
                      <div className="product-content__description--container">
                          <form className="product-content__description--form" value={qty} onChange={(e)=> setQty(e.target.value)}>
                              <select className="product-content__form--select">
                                  <option value="Selecione">Selecione</option> 
                                  {allProductInStock.map(q => (
                                  <option key={q + 1} value={q + 1}>{q + 1}</option>       
                                  ))} 
                              </select>
                          </form> 
                          <button className="store__button-one" onClick={handleAddToCart} type="button">
                            Adicionar ao carrinho
                          </button> 
                      </div>
                    ) : (
                      <button className="store__disable-button" disabled>
                        Produto Esgotado
                      </button>
                    )} 
                  <span></span>
                    <StoreSocialMedia />
                </article>
             </div> 
            )}
          </div>
       </div>
    </main>
  );
};

export default StoreProductpage;
