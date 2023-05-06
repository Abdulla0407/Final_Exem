import React from 'react'
import c from "./Hero.module.scss"
import sro from "../../assets/stroke.png"
import foo from "../../assets/karasofka.png"
import kiyim from "../../assets/spesi.png"
import { FaHeart } from "react-icons/fa"


const Hero = () => {
  return (
    <div>
      <nav className={c.hero}>
      <ul className={c.hero__list}>
        <li className={c.hero__item}>
          <p className={c.hero__text}>Home</p>
        </li>
        <li className={c.hero__item}>
          <p className={c.hero__text}><p><FaHeart/></p> Saved</p>
        </li>
        <li className={c.hero__item}>
          <p className={c.hero__text}>mators</p>
        </li>
        <li className={c.hero__item}>
          <p className={c.hero__text}>Electronics</p>
        </li>
        <li className={c.hero__item}>
          <p className={c.hero__text}>Collectibles</p>
        </li>
        <li className={c.hero__item}>
          <p className={c.hero__text}>Home & Garden</p>
        </li>
        <li className={c.hero__item}>
          <p className={c.hero__text}>Fashsion</p>
        </li>
        <li className={c.hero__item}>
          <p className={c.hero__text}>Toys</p>
        </li>
        <li className={c.hero__item}>
          <p className={c.hero__text}>Sporting Goods</p>
        </li>
        <li className={c.hero__item}>
          <p className={c.hero__text}>Business & Industrial</p>
        </li>
        <li className={c.hero__item}>
          <p className={c.hero__text}>Jewelry & Watches</p>
        </li>
        <li className={c.hero__item}>
          <p className={c.hero__text}>eBay Live</p>
        </li>
        <li className={c.hero__item}>
          <p className={c.hero__text}>Refurbished</p>
        </li>
      </ul>
      </nav>

      <div className={c.hero__Bottom__box}>
        <div className={c.hero__savings}>
          <h2 className={c.hero__Bootom__title}>
            Super savings at the Brand Outlet
          </h2>
          <p className={c.hero__Bottom__text}>
            Up to 60% off the brands you love.
          </p>
          {}
        </div>
        <div className={c.hero__subcatigoris}>
          <img src={sro} alt="" />
        </div>
        <div className={c.hero__subcatigoris}>
          <img src={foo} alt="" />
        </div>
        <div className={c.hero__subcatigoris}>
          <img src={kiyim} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero