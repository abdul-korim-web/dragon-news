import BrackingNews from '@/components/BrackingNews';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div>
            <Header/>
            <BrackingNews/>
            <Navbar/>
            {children}
        </div>
    );
}

export default MainLayout;
