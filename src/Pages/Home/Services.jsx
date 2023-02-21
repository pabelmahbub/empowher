import React from 'react'
import Service from './Service';
import a1 from '../../Assets/a1.avif'
// import fluoride from '../../assets/images/fluoride.png';
// import cavity from '../../assets/images/cavity.png';
// import whitening from '../../assets/images/whitening.png';

function Services() {
  const services = [{
    _id: 1,
    name: 'Who we are',
    img: a1,
    description: "Since 1961, we’ve been helping people claim their rights across the world.",
    myText:"Read full story"
    
  },
  {
    _id: 2,
    name: 'what we do',
    img: a1,
    description: "Since 1961, we’ve been helping people claim their rights across the world.",
    myText:"Read full story"
    
  },
  {
    _id: 3,
    name: 'Get involved',
    img: a1,
    description: "Since 1961, we’ve been helping people claim their rights across the world.",
    myText:"Read full story"
   
  },
  ]
  return (
    <div class="mt-20">
      <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 pt-6 gap-10'>

        {
          services.map(service => <Service
            key={service._id}
            service={service}></Service>)
        }

      </div>


    </div>
  )
}

export default Services;