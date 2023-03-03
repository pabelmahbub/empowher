import React, { useContext } from 'react';
import m5 from '../../Assets/37.webp'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';


function SignUp() {
   const {createUser} = useContext(AuthContext);
  const navigate = useNavigate();

 

    const handleSignUp=(e)=>{
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;

      createUser(email, password)
      .then(result => {
        const user = result.user;
        form.reset();
        console.log(user);
        navigate('/blogs');
        //toast.success('Nenflix account created successfully!');

      })
      .catch(err=> console.log(err));
      form.reset();
      
    }


  return (
    <div>



<div className="hero w-full my-20">
  <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <img src={m5} width="400px" className='mr-4' alt=""/>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl text-center font-bold mt-10">SignUp</h1>

      <form className="card-body" 
         onClick={console.log('HEllo')}
         onSubmit={handleSignUp}
      >
        <div className="form-control">
          <label className="label">
            <span  className="label-text">Name</span>
          </label> 
           <input type="text" name="name" placeholder="Your name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span  className="label-text">Email</span>
          </label>
          <input type="text" name="email" placeholder="email address" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span  className="label-text">Password</span>
          </label>
          <input type="text" name="password" placeholder="password" className="input input-bordered" />
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>
        <div className="form-control mt-6">
          <input  style={{borderRadius:'4px'}} className="btn button text-transform:capitalize" type="submit" value="signup" />
        </div>
      </form>
      <p className='pt-2 pb-4 text-center'>Already have an account. <Link to='/login' className='text-orange-600 font-bold'>Login</Link></p>
    </div>
  </div>
</div>




  </div>
  )
}

export default SignUp