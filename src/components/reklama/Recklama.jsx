import React from 'react'
import c from "./Recklama.module.scss"
import advertising from "../../assets/reclam.png"

const Recklama = () => {
  return (
    <div className={c.advertising}>
      <img src={advertising} alt="reclama" className={c.advertising} />
    </div>
  )
}

export default Recklama