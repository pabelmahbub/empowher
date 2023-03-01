import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';


function DataItem({ htmlString }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlString }} />
  );
}

function DevelopmentBlog() {
    const myData = useLoaderData();
    console.log(myData);
  return (
    <>
    <Navbar />
    <div className='add-service1'>
    <h1 className='titleStyle'><span className='title'>"I have to solve my problem!"</span></h1>
    <h1 className='bottomText1 mb-6'><span className='title'>My successful journey in my life as a girl.</span></h1>

      {myData.map((item, index) => (
        <div  style={{backgroundColor:'#fff', marginTop:'15px',width:'100%',flexDirection:'column',display:'flex',padding:'30px'}} className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 pt-6 gap-10'>
           

            <DataItem key={index} htmlString={item.editor}  />
            <DataItem key={index} htmlString={item.data}  />
        
        </div>
      ))}
    </div>

<Footer />
  
    </>

  )
}

export default DevelopmentBlog;
