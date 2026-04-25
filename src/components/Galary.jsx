import Image from 'next/image';
import React from 'react';
import swimming from "@/assets/swimming.png"
import Class from "@/assets/class.png"
import playground from "@/assets/playground.png"

const Galary = () => {
    return (
        <div className='p-4 bg-[#F3F3F3] mt-4 rounded-2xl '>
            <h2 className='font-bold text-2xl '>Q-Zone</h2>
          <div className='mt-5 flex flex-col items-center '>
              <Image src={swimming} alt='swimming image' />
            <Image src={Class} alt='Class image' />
            <Image src={playground} alt='playground image' />
          </div>
        </div>
    );
}

export default Galary;
