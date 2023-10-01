import React from 'react'
/*import PropTypes from 'prop-types'*/
//import './card.css'

export default function Card({id, title, image, instructor}) {
  return (
    <div className='card text-center bg-withe'>

      <div className='card-body text-ligth'>
          <img src={image} alt= "" className='card-img-top'></img>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary'>
          Instructor: {instructor}
        </p>
        <a href='#!' className='btn btn-outline-secondary rounded-0'>
          Ver contenido del Curso
        </a>
      </div>
    </div>  
  )
}