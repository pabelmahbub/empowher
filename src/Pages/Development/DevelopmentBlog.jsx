import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Loading from '../Shared/Loading';


function DataItem({ htmlString }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlString }} />
  );
}

function DevelopmentBlog() {
  const [myData, setMyData] = useState([]);


  //pagination 3 states
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);


  useEffect(() => {
  fetch(`https://empower-server-production.up.railway.app/singleBlog?page=${page}&size=${size}`)
    .then(response => response.json())
    .then(json => setMyData(json))
  }, [page,size])


  useEffect(() => {
    fetch('https://empower-server-production.up.railway.app/serviceCountOne')
    .then(res=>res.json())
    .then(data =>{
        const count = data.count;
        const pages = Math.ceil(count/4);
        setPageCount(pages);
    })
}, [])



    //const myData = useLoaderData();
    console.log(myData);
  return (
    <>
    <Navbar />

    {myData.length === 0 ? <Loading /> :
   <>

    <div className='add-service1'>
    <h1 className='titleStyle'><span className='title'>"I have to solve my problem!"</span></h1>
    <h1 className='bottomText1 mb-6'><span className='title'>My successful journey in my life as a girl.</span></h1>

      {myData.map((item, index) => (
        <div  style={{backgroundColor:'#fff', marginTop:'15px',width:'100%',flexDirection:'column',display:'flex',padding:'30px'}} className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 pt-6 gap-10'>
           

            <DataItem key={index} htmlString={item.editor}  />
            <DataItem key={index} htmlString={item.data}  />
        
        </div>
      ))}


      {/* pagination */}

      <div className='pagination'>
                    {
                        [...Array(pageCount).keys()].map(number =><button
                        className={page === number ? 'selected' : ''}
                        onClick={()=>setPage(number)}
                        >{number + 1}</button>)
                    }
                   <select className='selector' onChange={e=> setSize(e.target.value)}>
                        <option value ='6' selected>6</option>
                        <option value ='12'>12</option>
                        <option value ='18'>18</option>
                        <option value ='24'>24</option>
                    </select>
                </div>

                {/* pagination */}




    </div>
    </>
}
<Footer />
  
    </>

  )
}

export default DevelopmentBlog;
