import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Development() {
    const [editorValue, setEditorValue] = useState('');
    const [dataValue, setDataValue] = useState('');

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  const handleDataChange = (event) => {
    setDataValue(event.target.value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { editor: editorValue, data: dataValue };
    try {
      const response = await axios.post('https://empower-server-production.up.railway.app/addBlog', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };




  return (
    <div className='add-service'>

       <form onSubmit={handleSubmit}>
          <div style={{height:'300px',width:'400px',backgroundColor:'#fff',marginTop:'40px'}} >
             <ReactQuill value={editorValue} onChange={handleEditorChange} />
          </div>
             <input type="text" value={dataValue} onChange={handleDataChange} style={{marginTop:'20px',fontWeight:'bold', width:'400px',}} placeholder='Date *'/>
             {/* <button type="submit">Submit</button> */}
             <input style={{backgroundColor:'salmon', color:'#fff',fontWeight:'bold',width:'30%'}}type="submit" />
       </form>

     </div>

  )
}

export default Development;