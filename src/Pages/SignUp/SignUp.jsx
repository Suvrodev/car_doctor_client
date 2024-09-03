import React, { useContext } from 'react';
import loginImage from '../../assets/Login/login.svg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
    const {registrationByEmail,successfullToast,unSuccessfullToast}=useContext(AuthContext)

    const navigate=useNavigate()


    const updateUser=(user,name,photo)=>{
        console.log("Heating Update");
        updateProfile(user,{
            displayName: name,
            photoURL: photo
        })
        .then(result=>{
            console.log("Update profile Result: ",result);
            successfullToast("Successfully Registered")
            navigate('/home')
        })
        .catch(error=>{
            console.log("Update Error: ",error.message);
            unSuccessfullToast("Something Is Going Wrong")
        })
    }

    const handleSignUp=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;

        console.log(name,"\n",photo,"\n",email,"\n",password)

        registrationByEmail(email,password)
        .then(result=>{
            const loggedUsser=result.user;
            console.log("From Registation: ",loggedUsser)
            updateUser(loggedUsser,name,photo)
        })
        .catch(error=>{
            console.log(error.message)
        })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row gap-32">
          <div className="flex items-center justify-center  w-1/2">
            <img src={loginImage} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Sign Up</h1>
  
             <form onSubmit={handleSignUp}>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Name</span>
                  </label>
                  <input
                      type="text"
                      placeholder="Name"
                      className="input input-bordered"
                      name="name"
                  />
                  </div>

              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Photo url</span>
                  </label>
                  <input
                      type="url"
                      placeholder="Photo url"
                      className="input input-bordered"
                      name="photo"
                  />
                  </div>

              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Email</span>
                  </label>
                  <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      name="email"
                  />
                  </div>



                  <div className="form-control">
                  <label className="label">
                      <span className="label-text">Password</span>
                  </label>
                  <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                      name="password"
                  />
                  <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                      </a>
                  </label>
                  </div>
                  <div className="form-control mt-6">
                  <input type="submit" className="btn btn-primary" value="Sign up" />
                  </div>
             </form>
             <p className="text-center my-4">Already Have an Account <Link to='/login' className="font-bold text-orange-500">Login</Link> </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;