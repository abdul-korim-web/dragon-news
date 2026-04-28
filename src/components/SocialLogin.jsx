"use client"
import { authClient } from '@/lib/auth-client';


import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialLogin = () => {
    const googleLogin = async()=>{
        const data = await authClient.signIn.social({
            provider:"google"
        })
        console.log('data', data)

    }
    return (
        <div className='flex flex-col space-y-4'>
            <h2 className='font-bold text-2xl '>Login With </h2>
            <div className='flex flex-col space-y-3 '>
                <Button variant='outline' onClick={googleLogin} className='w-full flex justify-center items-center space-x-2 rounded-2xl py-2 border-2  border-blue-700'>
                    <FaGoogle/>
                    <span>Login with Google</span>
                </Button>
                <Link href={`/login`} className='w-full flex justify-center items-center space-x-2 rounded-2xl py-2 border-2  border-blue-700'>
                    <MdEmail />
                    <span>Login with Email</span>
                </Link>
            </div>
        </div>
    );
}

export default SocialLogin;
