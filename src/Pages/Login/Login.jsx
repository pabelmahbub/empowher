import React, { useContext, useEffect } from 'react'

import m5 from '../../Assets/images/61.webp'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { Helmet } from 'react-helmet';
import AdsComponent from '../../AdsComponent';



function Login() {
  const {user, loginUser, providerLogin} = useContext(AuthContext);
  const navigate = useNavigate();
  const { state } = useLocation();
  const from = state?.from?.pathname || "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const handleLogin =(e)=>{
    e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      loginUser(email, password)
      .then(result => {
        const user = result.user;
        form.reset();
        console.log(user);
      })
      .catch(err=> console.log(err));
      form.reset();
    }


    //for redirection to the route after authenticated[using RequiredAuth for private route ]:

    useEffect( () =>{
      if(user){
        navigate(from, { replace:true });
      }
    },[user, from, navigate])


        //google sign in:

        const googleProvider = new GoogleAuthProvider;

        const handleGoogleSignIn = ()=>{
             providerLogin(googleProvider)
             .then(result =>{
              const user = result.user;
              console.log(user);
             })
             .catch(err => console.error(err))
        }
 

  return (
    <div>


       <Helmet>
        <title>Blooms Girl Login</title>
        <meta 
           name='description'
           content='girls empowerment login'
         />
      </Helmet>


            <AdsComponent dataAdSlot='5667822085' />

                <div className="hero w-full my-20">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
               <img src={m5} width="400px" height="100px" className='mr-4' alt="Login-Image"/>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <h1 style={{fontFamily:'raleway'}} className="text-5xl text-center font-bold mt-10">Login</h1>

                <form className="card-body"
                    onSubmit={handleLogin}
                 >
                  <div className="form-control">
                    <label className="label">
                      <span style={{fontFamily:'raleway'}} className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' placeholder="email" className="input input-bordered" style={{borderRadius:'4px',fontFamily:'raleway'}} />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span  style={{fontFamily:'raleway'}} className="label-text">Password</span>
                    </label>
                    <input type="text" name='password' placeholder="password" className="input input-bordered" style={{borderRadius:'4px',fontFamily:'raleway'}}/>
                  </div>

                 

                  <div className="form-control mt-1">
                    <input style={{borderRadius:'4px',fontFamily:'raleway'}} className="btn button text-transform:capitalize" type="submit" value="login" />
                  </div>

                  <div onClick={handleGoogleSignIn} className="btn button text-transform:capitalize mt-1" style={{display: 'flex',backgroundColor:'#fff',borderRadius:'4px',paddingLeft:'15%',flexDirection:'row'}}>
                      <img src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1" style={{maxWidth: "100%",height: "30px",}} alt="Bloomsgirl image"/>
                      <p style={{color:'#000',fontFamily:'raleway'}}>Continue with Google</p>
                  </div>

                </form>
                <p style={{fontFamily:'raleway'}} className='pt-2 pb-4 text-center'>New to BloomsGirl? <Link to='/signup' className='text-orange-600 font-bold'>SignUp</Link></p>
              </div>
            </div>
          </div>




  </div>
  )
}

export default Login
