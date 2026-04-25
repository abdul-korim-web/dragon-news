import React from 'react';
import FaceBookLogo from "@/assets/fb.png"
import TwitterLogo from "@/assets/twitter.png"
import InstagramLogo from "@/assets/instagram.png"
import Image from 'next/image';
const FindOnUs = () => {
    return (
        <div className='flex flex-col space-y-7  mt-10'>
            <h2 className='font-bold text-2xl '>Find Us On</h2>
            <div className='flex flex-col space-y-4 border border-[#E7E7E7] rounded-[5px] p-[17px]'>
                <div className=' border-b flex space-x-3 items-center p-3 '>
                    <Image src={FaceBookLogo} width={"30px"} height={"40px"} loading={"eager"} alt="favebook logo"  />
                    <p className='text-[#706F6F] font-medium'>Facebook</p>
                </div>
                <div  className=' border-b flex space-x-3 items-center p-3 '>
                    <Image src={TwitterLogo} width={"30px"} height={"40px"} loading={"eager"} alt="TwitterLogo"  />
                    <p className='text-[#706F6F] font-medium'>Twitter</p>
                </div >
                    <div  className='  flex space-x-3 items-center p-3 '>
                        <Image src={InstagramLogo} width={"30px"} height={"40px"} loading={"eager"} alt="InstagramLogo"  />
                        <p className='text-[#706F6F] font-medium'>Instagram</p>
                    </div>
            </div>
        </div>
    );
}

export default FindOnUs;
