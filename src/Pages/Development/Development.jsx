import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Navigate, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Development() {
    const [editorValue, setEditorValue] = useState('');
    const [dataValue, setDataValue] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const { reset } = useForm();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  const handleDataChange = (event) => {
    setDataValue(event.target.value);
  };

  const navigate = useNavigate();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const formData = { editor: editorValue, data: startDate };
  //   try {
  //     const response = await axios.post('https://empower-server-production.up.railway.app/addSingleBlog', formData);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { editor: editorValue, data: startDate };
    axios.post('https://empower-server-production.up.railway.app/addSingleBlog', formData)
    .then(res=>{
             console.log(res);
             if(res.data.insertedId){
               alert('Single blog section: Blog is  added successfully');
               navigate('/singleBlog')
             }
    })
};





  return (
    <div className='add-service'>
       <Helmet>
        <title>Blooms Girl Blog</title>
        <meta 
           name='description'
           content='women empowerment blog development'
         />
      </Helmet>
       <h1 className='titleStyle'><span className='title'>"Think like a queen. A queen is not afraid to fail."</span></h1>

       <h1 className='bottomText mb-6'><span className='title'>Tell us the story of how you overcome obstacles.</span></h1>


       <form onSubmit={handleSubmit}>
        <div style={{height:'500px',width:'90%',backgroundColor:'#fff',marginTop:'40px', overflow:'scroll'}}>
             <ReactQuill value={editorValue} theme='snow' onChange={handleEditorChange} reset={reset} placeholder='Write your name and start your story of how you won it!'/>
          </div>
          <div style={{marginTop:'20px',fontWeight:'bold',borderRadius:'0px',width:'400px',textAlign:'center'}}>
          {/* <input type="text" value={dataValue} onChange={handleDataChange} style={{marginTop:'20px',fontWeight:'bold', width:'300px',borderRadius:'0px'}} placeholder='Name *'/>  */}

             <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect dateFormat="Pp" />

          </div >
             {/* <button type="submit">Submit</button> */}
             <input style={{backgroundColor:'salmon', color:'#fff',fontWeight:'bold',width:'30%'}}type = "submit"  />
       </form>

     </div>

  )
}

export default Development;