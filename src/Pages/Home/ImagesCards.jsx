import React, { useEffect } from 'react';
import a1 from '../../Assets/36.webp';
import a2 from '../../Assets/38.webp'
import a3 from '../../Assets/33.webp'
import a4 from '../../Assets/35.webp'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function ImagesCards() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const services = [{
        _id: 1,
        name: 'How to do Self Development?',
        img: a1,
        description: "Leadership is a continuous learning process. Women should seek out opportunities for learning and growth",
        myText:"Read Our story",
        path:"/singleBlog"
        
      },
      {
        _id: 2,
        name: 'How we grow in life?',
        img: a2,
        description: "Women grow in their careers through a combination of factors such as education, hard work, and mentorship",
        myText:"Browse the Issues",
        path:"/singleBlog"
        
      },
      {
        _id: 3,
        name: 'How we learned?',
        img: a3,
        description: "Women who aspire to be leaders must be willing to learn, take risks, and take charge of their lives",
        myText:"Take Action",
        path:"/singleBlog"
       
      },
      {
        _id: 4,
        name: 'Message for my younger one',
        img: a4,
        description: "All human life throughout  That the patriarchal way of life belongs to the history books and is therefore not found in today's world.",
        myText:"Take Action",
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

    <div style={{marginTop:'100px'}} className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-6 gap-10">
{
          services.map(service => (
           
       <div style={{alignItems:'center'}} key={service._id} className="card lg:card-side bg-base-100 shadow-xl">
         
            <img src={service.img} style={{height:'350px', width:'400px',objectFit:'fill'}} alt=" blooms girls app"/>
            <Link to={service.path}>
            <div className="card-body">
               <h2 style={{fontFamily:'raleway'}} className="px-6 card-title">{service.name}</h2>
               <p style={{fontFamily:'raleway'}} className='px-6 text-sm'>{service.description}</p>
             </div>
            </Link>
         </div>)
)
}


      
    </div>

    </>
  )
}

export default ImagesCards
