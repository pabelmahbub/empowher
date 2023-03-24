import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useLoaderData, useParams } from 'react-router-dom'
import Blog from './Blog';

function BlogDetail() {
    const [data, setData] = useState([])
    const {id} = useParams()


    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


    fetch(`https://empower-server-production.up.railway.app/blogs/${id}`)
      .then(response => response.json())
      .then(json => setData(json))

  return (
    <>
    <div>

    <Helmet>
        <title>Blooms Girl Blog details</title>
        <meta 
           name='description'
           content='girls app Blog details'
         />
      </Helmet>

      
      <div style={{backgroundColor: "rgb(111, 153, 159)"}} className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    {data.Image &&
    <img src={data.Image} className="lg:max-w-lg md:max-w-md sm:max-w-sm rounded-lg shadow-2xl" alt="girl app image" />
     }
    <div className="pl-6">
      <h1 style={{color:'#fff'}} className="text-4xl font-bold blogDetail pb-3">Title: {data.Title}</h1>
       <p style={{color:'#fff'}} className="text-2xl font-bold blogDetail pb-2">Hi, I am {data.Name}</p>
       <p style={{color:'#fff'}} className="text-md blogDetail">Location: {data.Location}</p>
       <p style={{color:'#fff'}} className="text-md blogDetail">I am {data.Old} years old.</p>
       <p style={{color:'#fff'}} className="text-md blogDetail pb-2">In my surroundings percentage of educated female child -  {data.Education} .</p>
       {data.Fields && 
       <p style={{color:'#fff',whiteSpace:'initial'}} className="text-md blogDetail">Reasons women are not 50/50 in all sectors of my society- {data.Fields} .</p>
        } 
       {data.Life && 
       <p style={{color:'#fff'}} className="text-md blogDetail">Women need more attention in- {data.Life} .</p>
        } 
       <p style={{color:'#fff'}} className="text-md blogDetail">In my age I think about my life is- {data.Feel} .</p>
       <p style={{color:'#fff'}} className="text-md blogDetail pb-3">{data.Society} under appreciated in society.</p>
       <p style={{color:'#fff', whiteSpace:'initial'}} className="text-md blogDetail">People are unhappy in our surroundings because they are- {data.Unhappy} .</p>
       <p style={{color:'#fff'}} className="text-md blogDetail">My advice for the younger self is- {data.Advice} .</p>
       {data.Change &&
       <p style={{color:'#fff'}} className="text-md blogDetail pb-3">I want to change in myself- {data.Change} .</p>
       }
       {data.Story &&
       <p style={{color:'#fff'}} className="text-md blogDetail pb-3">My Story: {data.Story} .</p>
       }
       {data.Lesson && 
       <p style={{color:'#fff'}} className="text-md blogDetail">{data.Lesson} learned from my life.</p>
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
