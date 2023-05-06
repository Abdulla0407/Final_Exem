import React from 'react'
import c from "./NavbarBotton.module.scss"
import logo from "../../../assets/logo.png"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import instance from '../../../api/axios';


const NavbarBotton = () => {

  const [inputText, setInputText] = useState("")
  const [searchData, setSearchData] = useState(null);

  const searchProduct = (e) => {
    e.preventDefault()
    setInputText(e.target.value)
    instance(`/products/${e.target.value}`)
      .then(response => {
        if (response.data.length > 0) {
          setSearchData(response.data)
        }
      })
      .catch(err => {
        console.log(err)
        setSearchData(null)
      })
  }
  console.log(searchData)
  console.log(inputText);
  console.log(setInputText);

  return (
    <nav className={c.navbar}>
      <Link to={"/"}>
        <img src={logo} alt="site-icone" />
      </Link>
      <div className={c.search}>
        <div className={c.main__search}>
          <div className={c.search__wrapper}>
            {/* <FiSearch /> */}
            <form>
              <input onChange={searchProduct} type="text" className={c.search__input} placeholder='Search products' />
              <div className={c.allcatt}>All Categories</div>
            </form>
          </div>
          {
            searchData?.length > 0 ?
              <div className={c.search__results}>
                <div className={c.result__nav}>
                  <h3>Қидириш натижалари: <span className={c.input__txt}>#{inputText}</span></h3>
                  <div>
                    <p>
                      <span>{searchData.length} Натижа</span>
                    </p>
                    <span onClick={() => {
                      setInputText("")
                      setSearchData([])
                    }} style={{ color: 'dodgerblue' }}>Бекор қилиш</span>
                  </div>
                </div>
                <div>
                  {
                    searchData.map(product =>
                      <div className={c.product__card__wrapper}>
                        <Link className={c.product__img} to={`/product/${product._id}`}>
                          <img src={product.images[0]} alt="Product" />
                          <span>{product.title}</span>
                        </Link>
                      </div>
                    )
                  }
                </div>
              </div>
              :
              <></>
          }
        </div>
        
      </div>
      <button onClick={setSearchData}>Search</button>
    </nav>
  )
}

export default NavbarBotton