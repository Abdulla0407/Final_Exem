import React from 'react'
import c from "./SellProduct.module.scss"
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import instance from "../../api/axios";

const SellProduct = () => {

  const { id } = useParams();
  const [texts, setTexts] = useState(null);
  useEffect(() => {
    instance(
      `/products/${id}`,

    )
      .then((response) => setTexts(response.data))
      .catch((err) => console.error(err));
  }, [id]);

return (
  <div className={c.singleProduct}>
    <div>
    {
      texts ?
      <img className={c.product__img} src={texts?.images[0]} alt="" />
      :
      <></>
    } 
    </div>
    <div>
    <div>
      {
        texts ?
        <h2 className={c.product__title}>{texts?.title}</h2>
        :
        <></>
      }
    </div>
    <div>
    {
        texts ?
        <strong className={c.product__price}>price:{texts?.price}$</strong>
        :
        <></>
      }
    </div>
    <div>
    {
        texts ?
        <p className={c.product__desc}>{texts?.description}</p>
        :
        <></>
      }
    </div>
    <Link
    >
    <botton className={c.product__btn}>Buy it Now</botton>
    </Link>
    <botton className={c.product__cart}>Add to cart</botton>
    <Link>
      <botton className={c.product__like}>Add to Watchlist</botton>
    </Link>
    </div>
  </div>
);
};

export default SellProduct