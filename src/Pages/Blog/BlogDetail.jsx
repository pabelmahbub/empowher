import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Blog from './Blog';

function BlogDetail() {
    const [data, setData] = useState([])
    const {id} = useParams()


    fetch(`https://empower-server-production.up.railway.app/blogs/${id}`)
      .then(response => response.json())
      .then(json => setData(json))

  return (
    <>
    <div>
      
      <div className="hero min-h-screen bg-pink-100">
  <div className="hero-content flex-col lg:flex-row">
    <img src={data.Image} className="lg:max-w-lg md:max-w-md sm:max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold blogDetail pb-3">Title: {data.Title}</h1>
       <p className="text-2xl font-bold blogDetail pb-2">Hi, I am {data.Name}</p>
       <p className="text-xl blogDetail">Location: {data.Location}</p>
       <p className="text-xl blogDetail">I am {data.Old} years old.</p>
       <p className="text-xl blogDetail pb-2">In my surroundings educated female child-  {data.Education} .</p>
       {data.Fields && 
       <p className="text-xl blogDetail">What are the reasons women are not 50/50 in all fields- {data.Fields} .</p>
        } 
       {data.Life && 
       <p className="text-xl blogDetail">Women need more attention in- {data.Life} .</p>
        } 
       <p className="text-xl blogDetail">In my age I think about my life is- {data.Feel} .</p>
       <p className="text-xl blogDetail pb-3">{data.Society} under appreciated in society.</p>
       <p className="text-xl blogDetail">People are unhappy in our surroundings because they are- {data.Unhappy} .</p>
       <p className="text-xl blogDetail">My advice for the younger self is- {data.Advice} .</p>
       {data.Change &&
       <p className="text-xl blogDetail pb-3">I want to change in myself- {data.Change} .</p>
       }
       {data.Story &&
       <p className="text-xl blogDetail pb-3">My Story: {data.Story} .</p>
       }
       {data.Lesson && 
       <p className="text-xl blogDetail">{data.Lesson} learned from my life.</p>
       } 
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>




    </div>
    </>
  )
}

export default BlogDetail
