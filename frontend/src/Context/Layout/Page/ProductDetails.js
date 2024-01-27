import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  // const [relatedProduct,setRelatedProduct] = useState([]);

  // iniralp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  // getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-products/${params.slug}`
      );
      setProduct(data?.product);
      // getSimilarProduct(data?.product._id, data?.product.category._id)
    } catch (error) {
      console.log(error);
    }
  };
  // get similar product
  // const getSimilarProduct = async (pid,cid) => {
  //     try {
  //         const {data} = await axios.get(`/api/v1/product/related-products/${pid}/${cid}`);
  //         setRelatedProduct(data?.product);
  //     } catch (error) {
  //         console.log(error)

  //     }
  // }
  return (
    <Layout>
      <div className="row container mt-4">
        <div className="col-md-5">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="300"
            width={"350px"}
          />
        </div>
        <div className="com-md-5 ">
          <h1 className="text-center">Product Details</h1>
          <h6>Name : {product.name}</h6>
          <h6>Description : {product.description}</h6>
          <h6>Price : {product.price}</h6>
          <h6>Category : {product.category?.name}</h6>
          <button className="btn btn-secondary ms-1">ADD TO CART</button>
        </div>
      </div>
      {/* <div className="row">
            <h1>Similar products</h1>
            8:15:14
            {JSON.stringify(relatedProduct, null, 4)}
            </div> */}
    </Layout>
  );
};

export default ProductDetails;
