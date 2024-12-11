import React from 'react';

const Register = () => {
    return (
        <div className="hero max-w-4xl mx-auto min-h-[470px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left flex-1">
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold m-8">Register now</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">

                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-blue-500">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;