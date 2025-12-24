import React from "react";
import Rating from "@mui/material/Rating";
import CurrentFormat from "../CurrentFormate/CurrentFormat";
import {Link} from 'react-router-dom'
import classes from "./product.module.css";
function ProductCard({ product }) {
  const {id, title, price, image, rating } = product;
  return (
    <div className={classes.card_container}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        <div className={classes.rating}>
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating.count}</small>
        </div>
        <div className={classes.price}>
          <CurrentFormat amount={price} />
        </div>
        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
