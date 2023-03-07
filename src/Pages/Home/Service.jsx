import React from 'react'
import { Link } from 'react-router-dom'

function Service({ service }) {
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-sm pt-13">
      <figure class="">
        <img width="107px" height="105px" src={service.img} alt="service-section-image" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 style={{fontFamily:'raleway'}} class="card-title">{service.name}</h2>
        <p style={{fontFamily:'raleway'}}>{service.description}</p>
        <Link to={`${service.path}`}>
           <button style={{borderRadius:'0px',fontFamily:'raleway'}} className="btn btn-outline">{service.myText}</button>
        </Link>
      </div>
    </div>
  )
}

export default Service