import React from 'react'

function Service({ service }) {
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl pt-10">
      <figure class="px-10 pt-10">
        <img width="117px" height="115px" src={service.img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{service.name}</h2>
        <p>{service.description}</p>
        <button className='btn-primary'>{service.myText}</button>
      </div>
    </div>
  )
}

export default Service