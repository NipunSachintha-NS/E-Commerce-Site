import React from 'react'
import { Link } from 'react-router-dom'

import bannerImg from "../../assets/header.png"

function Banner() {
  return (
    <div className='section__container header__container'>
        <div className='header__content z-30'>
            <h4 className='uppercase'>UP TO 205 Discount on</h4>
            <h1>Girl's Fashion</h1>
            <p> Disover he lates trends and express your unique style our women's Fashion
                website. Explore curated collection of clothings, accessories, and footwear that 
                caters to every taste and occasion 
            </p>
            <button className='btn'><Link to='/shop'>EXPLORE NOW</Link></button>
        </div>
        <div className='header__image'>
            <img src={bannerImg} alt="banner image" />
        </div>

    </div>
  )
}

export default Banner