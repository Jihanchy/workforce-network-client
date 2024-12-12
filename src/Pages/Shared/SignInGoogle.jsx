import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import AuthContext from '../../Context/AuthContext/AuthContext';

const SignInGoogle = () => {
    const {googleSignIn} = useContext(AuthContext)
    return (
        <>
            <button onClick={googleSignIn} className='btn hover:bg-white bg-white text-lg rounded-sm mb-3'>
                <span><FcGoogle /></span>
                <span className='hover:text-blue-500'>Sign up with Google</span>
            </button>
            <div className='divider'>or continue with</div>
        </>
    );
};

export default SignInGoogle;