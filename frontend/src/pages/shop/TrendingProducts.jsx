import React from 'react'
import ProductCards from './ProductCards'

import products from "../../data/product.json"


function TrendingProducts() {
    const[visibleProducts, setVisibleProducts]= useState(8);
    const loadMoreProduct = () => {
        setVisibleProducts(prevCount => prevCount +4)
    }
  return (
    <section className='section__container product__container'>
        <h2 className='section__header'>Trending Product</h2>
        <p className='section__subheader mb-12'>Discove the Hottest PIcks:Elevate Your Style 
            with Our Curated of Trendin Women's Fashion Products.
        </p>

        <ProductCards products ={products} />

    </section>
  )
}

export default TrendingProducts