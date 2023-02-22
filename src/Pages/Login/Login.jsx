import React from 'react'

import m5 from '../../Assets/31.webp'
import { Link } from 'react-router-dom';



function Login() {
//   const {loginUser} = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogin =(e)=>{
//     e.preventDefault();
//       const form = e.target;
//       const email = form.email.value;
//       const password = form.password.value;

//       loginUser(email, password)
//       .then(result => {
//         const user = result.user;
//         form.reset();
//         console.log(user);
       
//         navigate('/homepage');
//       })
//       .catch(err=> console.log(err));
//       form.reset();
//     }

 

  return (
    <div>


                <div className="hero w-full my-20">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
               <img src={m5} width="400px" height="100px" className='mr-4' alt=""/>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <h1 className="text-5xl text-center font-bold mt-10">Login</h1>

                <form className="card-body"
                //  onSubmit={handleLogin}
                 >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span  className="label-text">Password</span>
                    </label>
                    <input type="text" name='password' placeholder="password" className="input input-bordered" />
                    {/* <label className="label">
                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label> */}
                  </div>
                  <div className="form-control mt-6">
                    <input style={{borderRadius:'4px'}} className="btn button text-transform:capitalize" type="submit" value="login" />
                  </div>
                </form>
                <p className='pt-2 pb-4 text-center'>New to Empow(h)er? <Link to='/signup' className='text-orange-600 font-bold'>SignUp</Link></p>
              </div>
            </div>
          </div>




  </div>
  )
}

export default Login
