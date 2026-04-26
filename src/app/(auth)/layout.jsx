import Navbar from '@/components/Navbar';
import React from 'react';

const AuthLayout = ({children}) => {
    return (
        <div className='bg-gray-200'>
            <Navbar/>
            {children}
        </div>
    );
}

export default AuthLayout;
