import React from "react";
import CarouselBanner from "../../Components/CAROUSEL/CarouselBanner";
import Catagory from "../../Components/CATAGORY/Catagory";
import Product from "../../Components/PRODUCT/Product";
import Layout from "../../Components/Layout/Layout";
function Landing() {
  return (

      <Layout>
        <CarouselBanner />
        <Catagory />
        <Product />
      </Layout>
  
  );
}

export default Landing;
