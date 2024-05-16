import React from 'react'
import CardImg from './CardImg'
import SingleProduct from './SingleProduct'

function CardSlider() {
  return (
    <div className="flex gap-32">
      <CardImg/>
      <SingleProduct/>
    </div>
  )
}

export default CardSlider