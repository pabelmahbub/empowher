import React from 'react'

function Service({ service }) {
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-sm pt-13">
      <figure class="">
        <img width="107px" height="105px" src={service.img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{service.name}</h2>
        <p>{service.description}</p>
        <button style={{borderRadius:'0px'}} className="btn btn-outline">{service.myText}</button>
      </div>
    </div>
  )
}

export default Service