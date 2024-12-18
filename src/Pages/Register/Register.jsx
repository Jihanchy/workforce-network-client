import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import animationRegisterLottie from '../../assets/register.json'
import { FcGoogle } from "react-icons/fc";
import AuthContext from '../../Context/AuthContext/AuthContext';
import SignInGoogle from '../Shared/SignInGoogle';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target 
        const name = form.name.value 
        const email = form.email.value 
        const password = form.password.value
        const user = {name,email,password}
        // console.log(user)
        if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
            alert('Your password must have a lowerCase , an upperCase letter and at least 6 character')
            return
        }

        createUser(email,password)
        .then(result => {
            // console.log(result.user)
            e.target.reset()
        })
        .catch(error => {
            // console.log(error)
        })
        
    }
    return (
        <div className="hero max-w-4xl mx-auto min-h-[470px]">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={animationRegisterLottie}></Lottie>
                </div>
                <div className="card bg-base-100 text-center w-full max-w-sm shrink-0">
                    <h1 className="text-4xl font-bold m-8">Register now</h1>
                    <SignInGoogle></SignInGoogle>
                    {/* form */}
                    <form onSubmit={handleSignUp} className="card-body px-0 py-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="enter your name" className="input rounded-sm input-bordered" />
                        </div>
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
                            <button className="btn bg-blue-500 text-lg text-white">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;