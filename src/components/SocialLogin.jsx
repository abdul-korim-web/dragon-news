import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className='flex flex-col space-y-4'>
            <h2 className='font-bold text-2xl '>Login With </h2>
            <div className='flex flex-col space-y-3 '>
                <div className='flex justify-center items-center space-x-2 rounded-2xl py-2 border-2  border-blue-700'>
                    <FaGoogle/>
                    <span>Login with Google</span>
                </div>
                <div className='flex justify-center items-center space-x-2 rounded-2xl py-2 border-2  border-blue-700'>
                    <FaGithub/>
                    <span>Login with Github</span>
                </div>
            </div>
        </div>
    );
}

export default SocialLogin;
