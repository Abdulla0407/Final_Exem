import React from 'react'
import c from "./NavbarTop.module.scss"
import { Link } from 'react-router-dom';
import { UniversalLink } from '../../../utils/Components'
import { BsBell } from "react-icons/bs"
import { FiShoppingCart } from "react-icons/fi"





const NavbarTop = () => {

  return(
    <nav className={c.navbar}>
 
         <div className={c.navbar__boxlink}>
          <p className={c.navbar__text}>Hi!<UniversalLink  text={" Sign "} link="/auth/login" />in</p>
          <p className={c.navbar__text}>or<UniversalLink text={" register"} link="/auth/register" /></p>
          <p className={c.navbar__text}>Daily Deals</p>
          <p className={c.navbar__text}>Brand Outlet</p>
          <p className={c.navbar__text}>Help & Contact</p>
         </div>
         <div className="">
            <ul className={c.navbar__list}>
              <li className={c.navbar__item}>
                <p className={c.navbar__text}>Sell</p>
              </li>
              <li className={c.navbar__item}>
                <UniversalLink link={"/like"} text={"Watchlist"}/>
              </li>
              <li className={c.navbar__item}>
                <p className={c.navbar__text}>My eBay</p>
              </li>
              <li className={c.navbar__item}>
                <p className={c.navbar__icon}><BsBell/></p>
              </li>
              <li className={c.navbar__item}>
                <Link to={"/basket"}>
                  <p className={c.navbar__icon}><FiShoppingCart/></p>
                </Link>
              </li>
            </ul>
         </div>

    
    </nav>
  );
};



export default NavbarTop