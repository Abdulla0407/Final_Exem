import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


import c from "./CatigoryPraducts.module.scss";
import instance from "../../api/axios";

const CatigoryPraducts = () => {


  const { id } = useParams();
  const [data, setData] = useState([]); 
  useEffect(() => {
    instance(
      `/categories/1/products`,
    )
      .then((response) => setData(response.data))
      .catch((err) => console.error(err));
  }, [id]);



  return (
    <div className={c.category__div}>
      {
        data.map((catpraduct, id) => 
        <div key={id} className={c.category__item}>
         <div className={c.category__item__image}>
          <img className={c.category__img} src={catpraduct.images[0]} alt="" />
         </div>
        <p > {catpraduct.title}</p>
        <strong>{catpraduct.price}$</strong>
              <p className={c.cat__praduct__text}>{catpraduct.description}</p>
        </div>  
      )
      }
    </div>
  )
}

export default CatigoryPraducts