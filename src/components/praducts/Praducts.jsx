import React from 'react'
import c from "./Praducts.module.scss"
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import instance from '../../api/axios';
const Praducts = () => {

  const [allPraducts, setPraducts] = useState([]);
  useEffect(() => {
    instance("/products?limit=16")
      .then(response => setPraducts(response.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className={c.praducts}>
      {
        allPraducts.map((praduct, id)=>
          <Link
          to={`/sellproduct/${praduct.id}`}
           key={id}
          >
            <div className={c.praduct__box}>
              <img className={c.images} src={praduct.images[0]} alt="" />
              <h3>{praduct.title}</h3>
              <strong>{praduct.price}$</strong>
              <p>{praduct.description}</p>
            </div>
          </Link>
        )
      }
    </div>
  )
}

export default Praducts