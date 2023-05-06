import React from 'react'
import c from "./Footer.module.scss"
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className={c.footer}>
      <div className={c.supbox}>
        <h2 className={c.footer__title}>Buy</h2>
        <p className={c.footer__text}>Registration</p>
        <p className={c.footer__text}>eBay Money Back Guarantee</p>
        <p className={c.footer__text}>Bidding & buying help</p>
        <p className={c.footer__text}>Stores</p>
        <p className={c.footer__text}>eBay for Charity</p>
        <p className={c.footer__text}>Charity Shop</p>
        <p className={c.footer__text}>Seasonal Sales and events</p>
      </div>
      <div className={c.supbox}>
        <div>
          <h2 className={c.footer__title}>Sell</h2>
          <p className={c.footer__text}>Start selling</p>
          <p className={c.footer__text}>How to sell</p>
          <p className={c.footer__text}>Business sellers</p>
          <p className={c.footer__text}>Affiliates</p>
        </div>

        <div>
          <h2 className={c.footer__title}>Tools & apps</h2>
          <p className={c.footer__text}>Developers</p>
          <p className={c.footer__text}>Security center</p>
          <p className={c.footer__text}>Site map</p>
        </div>

      </div>
      <div className={c.supbox}>
        <h2 className={c.footer__title}>Stay connected</h2>
        <Link to={"https://ru-ru.facebook.com/"} className={c.footer__link}>Facebook</Link>
        <Link to={"https://www.Twitter.com/"} className={c.footer__link}>Twitter</Link>
      </div>

      <div className={c.supbox}>
        <h2 className={c.footer__title}>About eBay</h2>
        <p className={c.footer__text}>Company info</p>
        <p className={c.footer__text}>News</p>
        <p className={c.footer__text}>Investors</p>
        <p className={c.footer__text}>Careers</p>
        <p className={c.footer__text}>Diversity & Inclusion</p>
        <p className={c.footer__text}>Global Impact</p>
        <p className={c.footer__text}>Government relations</p>
        <p className={c.footer__text}>Advertise with us</p>
        <p className={c.footer__text}>Policies</p>
        <p className={c.footer__text}>Verified Rights Owner (VeRO) Program</p>
        <p className={c.footer__text}>eCI Licenses</p>
      </div>

      <div className={c.supbox}>
        <div>
          <h2 className={c.footer__title}>Help & Contact</h2>
          <p className={c.footer__text}>Seller Center</p>
          <p className={c.footer__text}>Contact Us</p>
          <p className={c.footer__text}>eBay Returns</p>

        </div>
        <div>
          <h2 className={c.footer__title}>Community</h2>
          <p className={c.footer__text}>Announcements</p>
          <p className={c.footer__text}>eBay Community</p>
          <p className={c.footer__text}>eBay for Business Podcast</p>
        </div>

        <div>
          <h2 className={c.footer__title}>eBay Sites</h2>
        </div>
      </div>
    </div>
  )
}

export default Footer