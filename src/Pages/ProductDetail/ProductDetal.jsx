import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import { productUrl } from "../../Api/endpoint";
import axios from "axios";
import ProductCard from "../../Components/PRODUCT/ProductCard";
import Loading from "../../Components/Loading/Loading";
function ProductDetal() {
  const [product, setProduct] = useState({});
  const [IsLoading,setIsLoading]=useState(false);
  const { productId } = useParams();
  
  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        console.log("ressssssssssss",res.data);
        setProduct(res.data);
        IsLoading(false)
      })
      .catch((err) => {
        console.log("yyyyyyyy", err);
        IsLoading(false)

      });
  }, []);

  return (
    <Layout>  
      {IsLoading?(<Loading/> ): (<ProductCard product={product} />)}
      
    </Layout>
  );
}

export default ProductDetal;
