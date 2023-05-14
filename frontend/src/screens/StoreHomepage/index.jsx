import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import StoreBanner from "../../components/StoreBanner";
import StoreProductGrid from "../../components/StoreProductGrid";
import StoreProductSlider from "../../components/StoreProductSlider";
import StoreUserComments from "../../components/StoreUserComments";
import StoreBlog from "../../components/StoreBlog";
import StoreAdvantages from "../../components/StoreAdvantages";
import StoreBackground from "../../components/StoreBackground";
import StoreGoTop from "../../components/common/StoreGoTop";
import { listProducts } from '../../actions/productActions'

import "./store_homepage.css";

const StoreHomepage = () => {
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);

  // manter a navegação no topo ao trocar de página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <main>
      <StoreBanner />
      <StoreProductSlider products={products} error={error} loading={loading} />
      <StoreProductGrid products={products} error={error} loading={loading} />
      <StoreAdvantages />
      <StoreBackground />
      <StoreBlog />
      <StoreUserComments />
      <StoreGoTop />
    </main>
  );
};

export default StoreHomepage;
