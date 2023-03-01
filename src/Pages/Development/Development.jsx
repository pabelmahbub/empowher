import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Development() {
    const [editorValue, setEditorValue] = useState('');
    const [dataValue, setDataValue] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const { reset } = useForm();

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  const handleDataChange = (event) => {
    setDataValue(event.target.value);
  };


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
               alert('My blog section is  added successfully');
               formData.reset();
             }
    })
};





  return (
    <div className='add-service'>
       <h1 className='titleStyle'><span className='title'>"Think like a queen. A queen is not afraid to fail."</span></h1>

       <h1 className='bottomText mb-6'><span className='title'>Tell us story of how you overcome obstacles.</span></h1>

       <form onSubmit={handleSubmit}>
          <div style={{height:'500px',width:'60%',backgroundColor:'#fff',marginTop:'40px', overflow:'scroll'}} >
             <ReactQuill value={editorValue} theme='snow' onChange={handleEditorChange} reset={reset}/>
          </div>
          <div style={{marginTop:'20px',fontWeight:'bold',borderRadius:'0px',width:'400px',textAlign:'center'}}>
          {/* <input type="text" value={dataValue} onChange={handleDataChange} style={{marginTop:'20px',fontWeight:'bold', width:'300px',borderRadius:'0px'}} placeholder='Name *'/>  */}

             <DatePicker  selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect
  dateFormat="Pp" />

          </div >
             {/* <button type="submit">Submit</button> */}
             <input style={{backgroundColor:'salmon', color:'#fff',fontWeight:'bold',width:'30%'}}type="submit"  />
       </form>

     </div>

  )
}

export default Development;