import React from 'react'
import Service from './Service';
import a1 from '../../Assets/22.webp';
import a2 from '../../Assets/31.webp'
import a3 from '../../Assets/24.webp'
import a4 from '../../Assets/25.webp'
// import fluoride from '../../assets/images/fluoride.png';
// import cavity from '../../assets/images/cavity.png';
// import whitening from '../../assets/images/whitening.png';

function Services() {
  const services = [{
    _id: 1,
    name: 'Who we are',
    img: a4,
    description: "We’ve been creating awareness among mass people to ensure girls human rights.",
    myText:"Read Our story"
    
  },
  {
    _id: 2,
    name: 'what we do',
    img: a3,
    description: "We’ve been changing people's misconception towards female by creating mass awareness. Our vision is to create workforce 50/50 in our society.",
    myText:"Browse the Issues"
    
  },
  {
    _id: 3,
    name: 'Get involved',
    img: a1,
    description: "By publishing successful life/career story from which others will be encouraged and know how to live like a queen.",
    myText:"Take Action"
   
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