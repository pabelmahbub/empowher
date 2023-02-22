import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import "./PostBlog.css";

function PostBlog() {
         const { register, handleSubmit,reset } = useForm();
         const onSubmit = data => {
                     console.log(data);
                     axios.post('https://empower-server-production.up.railway.app/addBlog', data)
                     .then(res=>{
                              console.log(res);
                              if(res.data.insertedId){
                                alert('Blog is  added successfully');
                                reset();
                              }
                     })
};

  return (
    <>
   <div className='add-service'>
      <h1 className='titleStyle'><span className='title'>eMPOWHEr</span></h1>
      <h1 className='bottomText'><span className='title'>Express yourself</span></h1>
         {/**React-hook-form */}
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Date", { required: true, maxLength: 100 })} placeholder='Date *' />
      <input {...register("Name", { required: true, maxLength: 50 })} placeholder='Name or Pseudo Name *'/>
      <input {...register("Location", { required: true, maxLength: 500 })} placeholder='Location *'/>
      <input {...register("Title", { required: true, maxLength: 40 })} placeholder='Title of my story *'/>
      <input {...register("Initially", {required: true, maxLength: 70 })} placeholder="Initially what happened?[about 100 words] *"/>
      <textarea {...register("Story")} placeholder='My Story[1000 words]'/>
      <input {...register("Image", {  maxLength: 1000 })} placeholder="Image URL"/>
      <input {...register("Lesson", {  maxLength: 300 })} placeholder="what You learned? "/>
      <input {...register("Advice", {  maxLength: 300 })} placeholder="Advice in one sentence"/>
      
      <input style={{backgroundColor:'salmon', color:'#fff',fontWeight:'bold',width:'30%'}}type="submit" />
    </form>
    </div>
    </>

  )
}

export default PostBlog;