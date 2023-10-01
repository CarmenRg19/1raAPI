import React from 'react'
import Card from './Card'
import image1 from "../assets/CSS1.png"
import image2 from "../assets/HTML2.png"
import image3 from "../assets/JS1.png"

const cards = [
{
  id: 1,
  title: 'Curso de CSS',
  image: image1,
  instructor: "Samuel Lopez Razo"
},
{
  id: 2,
  title: 'Curso de HTML',
  image: image2,
  instructor: "Irene Aguilar Juaréz"
},
{
  id: 2,
  title: 'Curso de JavaScript',
  image: image3,
  instructor: "Samuel Lopez Razo"
},
]
export default function Cards() {
  console.log()
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
      <div className='row'>
        {
          cards.map (c => (
            <div className="col-md-4" key={cards.id}>
              <Card
              key={c.id}
              id={c.id}
              title={c.title}
              image={c.image}
              instructor={c.instructor}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}
