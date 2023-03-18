import React, { useEffect } from 'react'
import Service from './Service';
import a1 from '../../Assets/22.webp';
import a2 from '../../Assets/31.webp'
import a3 from '../../Assets/24.webp'
import a4 from '../../Assets/25.webp'
import { Helmet } from 'react-helmet';
// import fluoride from '../../assets/images/fluoride.png';
// import cavity from '../../assets/images/cavity.png';
// import whitening from '../../assets/images/whitening.png';

function Services() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const services = [{
    _id: 1,
    name: 'Who we are',
    img: a4,
    description: "BloomsGirl is a platform to create awareness and share knowledge amongst girls, women",
    myText:"Short Blogs",
    path:"/blogs"
    
  },
  {
    _id: 2,
    name: 'what we do',
    img: a3,
    description: "Our vision is to create an equal ratio in the workforce (women: men 50:50) in our society",
    myText:"Share opinion",
    path:"/postBlog"
    
  },
  {
    _id: 3,
    name: 'Get involved',
    img: a1,
    description: "Let's publish successful life/career stories and tell know how to live like a Queen",
    myText:"All the heroic Girls",
    path:"/singleBlog"
   
  },
  ]
  return (
    <>
     <Helmet>
        <title>BloomsGirl app</title>
        <meta 
           name='description'
           content='girls empowerment app'
         />
      </Helmet>
    
   
    <div class="mt-20">
      <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 pt-6 gap-10'>

        {
          services.map(service => <Service
            key={service._id}
            service={service}></Service>)
        }

      </div>


    </div>

    </>
  )
}

export default Services;