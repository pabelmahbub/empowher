import React from 'react';
import a1 from '../../Assets/36.webp';
import a2 from '../../Assets/38.webp'
import a3 from '../../Assets/33.webp'
import a4 from '../../Assets/35.webp'

function ImagesCards() {
    const services = [{
        _id: 1,
        name: 'How to do Self Development?',
        img: a1,
        description: "all human life throughout That the patriarchal way of life belongs to the history books and is therefore not found in today's world.",
        myText:"Read Our story"
        
      },
      {
        _id: 2,
        name: 'How we grow in life?',
        img: a2,
        description: "all human life throughout  That the patriarchal way of life belongs to the history books and is therefore not found in today's world.",
        myText:"Browse the Issues"
        
      },
      {
        _id: 3,
        name: 'How we learned?',
        img: a3,
        description: "all human life throughout  That the patriarchal way of life belongs to the history books and is therefore not found in today's world.",
        myText:"Take Action"
       
      },
      {
        _id: 4,
        name: 'Message for my younger one',
        img: a4,
        description: "all human life throughout  That the patriarchal way of life belongs to the history books and is therefore not found in today's world.",
        myText:"Take Action"
       
      },
      ]
  return (
    <div style={{marginTop:'100px'}} className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-6 gap-10">
{
          services.map(service => 
       <div style={{alignItems:'center'}} className="card lg:card-side bg-base-100 shadow-xl">
  <img src={service.img} style={{height:'350px', width:'400px',objectFit:'fill'}} alt="Album"/>
  <div className="card-body">
    <h2 className="px-6 card-title">{service.name}</h2>
    <p className='px-6 text-sm'>{service.description}</p>
   
  </div>
</div>
)
}


      
    </div>
  )
}

export default ImagesCards
