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
                                alert('Added in One min section!');
                                reset();
                              }
                     })
};

  return (
    <>
   <div className='add-service'>
      <h1 className='titleStyle'><span className='title'>BloomsGirl</span></h1>
      <h1 className='bottomText mb-6'><span className='title'>13 Questions: 1 minute <br/>Suggest/Advise To your younger one</span></h1>
         {/**React-hook-form */}
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Date", { required: true, maxLength: 100 })} placeholder='Date*' />
      <input {...register("Name", { required: true, maxLength: 50 })} placeholder='Name/ Pseudo Name*'/>
      <input {...register("Location", { required: true, maxLength: 500 })} placeholder='Your Location*'/>
      <input {...register("Old", { required: true, maxLength: 500 })} placeholder='Age*'/>
      <input {...register("Education", {  required: true, maxLength: 300 })} placeholder="educated female child(percentage)?*"/>
      <input {...register("Fields", {  required: true, maxLength: 300 })} placeholder="Reasons women are not 50/50 in all fields?"/>
      <input {...register("Life", {  required: true, maxLength: 300 })} placeholder="Must needed in women's life/profession?*"/>
      <input {...register("Feel", { required: true, maxLength: 500 })} placeholder='What is your feelings about life?*'/>
      <input {...register("Society", { required: true, maxLength: 500 })} placeholder='what is under appreciated in our society?*'/>
      <input {...register("Unhappy", { required: true, maxLength: 500 })} placeholder='People are unhappy in surroundings?*'/>
      <input {...register("Advice", { required: true, maxLength: 500 })} placeholder='Advice to anyone of your age/ junior?*'/>
      <input {...register("Change", { required: true, maxLength: 300 })} placeholder="what do you want to change in yourself?*"/>
      <input {...register("Title", { required: true, maxLength: 40 })} placeholder='Title of interview?*'/>
      <input {...register("Image", {  maxLength: 1000 })} placeholder="Image URL(if available)"/>
      {/* <input {...register("Initially", {required: true, maxLength: 70 })} placeholder="Initially what happened?[about 100 words] *"/>
      <textarea {...register("Story")} placeholder='My Story[1000 words]'/>
      <input {...register("Image", {  maxLength: 1000 })} placeholder="Image URL"/> */}
      {/* <input {...register("Lesson", {  maxLength: 300 })} placeholder="what You learned? "/> */}
      
      <input style={{backgroundColor:'salmon', color:'#fff',fontWeight:'bold',width:'30%'}}type="submit" />
    </form>
    </div>
    </>

  )
}

export default PostBlog;