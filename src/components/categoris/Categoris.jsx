import React, { useState } from 'react';
import c from "./Categoris.module.scss";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import instance from "../../api/axios";
import { FiArrowRight } from "react-icons/fi"




const AllCategories = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  useEffect(() => {
    instance("/categories?limit=5")
      .then(response => setCategoriesData(response.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <section className={c.allcategories}>
      <div className={c.categori}>
        <h3>Score these trending kicks</h3>
        <Link className={c.categori__link}>
          See all <p className={c.category__icon}><FiArrowRight/></p>
        </Link>
      </div>
      <div
        className={c.allcategories__container}>
        {
          categoriesData ?
            categoriesData.map((category, id) =>
              <Link
              to={`/CatigoryPraducts/${category.name}`}
               key={id}  className={c.category__item}>
                <div  className={c.category__item__image}>
                  <img src={category.image} alt="" />
                </div>
                <p> {category.name}</p>
              </Link>
            )
            :
            <p className={c.loding}>Loading...</p>
        }
      </div>
    </section>
  )
}

export default AllCategories