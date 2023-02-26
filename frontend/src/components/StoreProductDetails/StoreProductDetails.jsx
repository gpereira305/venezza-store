import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate  } from "react-router-dom";
import { useDispatch, useSelector }  from 'react-redux';
import { listProductDetails } from "../../actions/productActions"; 
import StoreSocialMedia from "../../components/common/StoreSocialMedia";
import exit from "../../assets/icons/exit-icon.svg";
import "./store_details-page.css";
import StoreLoader from "../StoreMessages/StoreLoader";
import StoreMessage from "../StoreMessages/StoreMessage";

const StoreProductDetails = () => {  
  const [qty, setQty] = useState(0);

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
    <div className="store__product-details">
      <Link className="store__product-details--goback" to={"/"}>
        <img src={exit} alt="Sair" />
        Voltar
      </Link>

      <div className="store__product-details--wrapper">
        {loading ? (<StoreLoader/>) : 
          error ? ( <StoreMessage variant={'danger'}>{error}</StoreMessage>
        ) : (
        <>
        <figure className="store__product-details--image">
            <img 
               className="store__image--product"
               src={product.image} 
               alt={product.name} 
               title={product.name} 
            />
          </figure>
          <article className="store__product-details--description">
            <div className="store__description--content">
                <h1 className="store__content--title">
                  {product.name}
                </h1>
                <h2 className="store__content--price">
                    R$ {product.price}
                </h2>
            </div>
 
            <span></span>

            <p className="store__description--text">
               {product.description}
            </p>
             {product.countInStock > 0 ? (
              <div className="store__description--form-container">
               <form className="store__description--action-select" 
                value={qty} onChange={(e)=> setQty(e.target.value)} 
               >
                <select>
                  <option value="Selecione">Selecione</option> 
                  {allProductInStock.map(q => (
                  <option key={q + 1} value={q + 1}>{q + 1}</option>       
                  ))} 
                </select>
              </form> 
               <button className="store__button-one"                
                 onClick={handleAddToCart} type="button"
                >
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
        </> 
        )}
      </div>
    </div>
  );
};

export default StoreProductDetails;
