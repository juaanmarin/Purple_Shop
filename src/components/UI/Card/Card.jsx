import React from 'react'
import "./Card.css"

export const Card = ({img}) => {
  return (
    <div className='cardClothing'>
        <div className='imgClothing'>
            <img className='imgClothingl' src={img} alt='img-clothing'></img>
        </div>
        <div className='card-btn-container'>
            <button className='infoClothing'>mas</button>
            <button className='saleClothing'>comprar</button>
        </div>
    </div>
  )
}
