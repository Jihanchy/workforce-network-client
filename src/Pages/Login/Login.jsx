import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import animationLoginLottie from '../../assets/login.json'
import { FcGoogle } from 'react-icons/fc';
import AuthContext from '../../Context/AuthContext/AuthContext';
import SignInGoogle from '../Shared/SignInGoogle';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const {createUser, signInUser} = useContext(AuthContext)
    const location = useLocation()
    const redirect = location?.state || '/'
    const navigate = useNavigate()
    console.log(location)
    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target 
        const email = form.email.value 
        const password = form.password.value
        const user = {email,password}
        console.log(user)

        signInUser(email,password)
        .then(result => {
            console.log(result.user)
            e.target.reset()
            navigate(redirect)
        })
        .catch(error => {
            console.log(error)
        })
        
    }
    return (
        <div className="hero max-w-4xl mx-auto min-h-[470px]">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={animationLoginLottie}></Lottie>
                </div>
                <div className="card bg-base-100 text-center w-full max-w-sm shrink-0">
                    <h1 className="text-4xl font-bold m-8">Login now</h1>
                    <SignInGoogle/>
                    {/* form */}
                    <form onSubmit={handleSignIn} className="card-body px-0 py-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input rounded-sm input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input rounded-sm input-bordered" required />
                            <label className="label">
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="btn bg-blue-500 text-lg text-white">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;