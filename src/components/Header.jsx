import React from 'react';
import logo from "@/assets/logo.png"
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center py-10 space-y-2'>
            <Image src={logo} alt="logo" className="w-[300px] md:w-[350px] lg:w-[400px] h-auto" height={60}/>
            <p className='text-[18px] text-[#706f6f] '>Journalism Without Fear or Favour</p>
            <p className='font-medium text-xl text-[#403f3f]'>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
}

export default Header;
