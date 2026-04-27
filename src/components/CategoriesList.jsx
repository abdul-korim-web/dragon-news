import Link from 'next/link';
import React, { use } from 'react';
    const getData = async()=>{
        const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
        const data =await res.json()
        return data
    }

const CategoriesList = async() => {
    // console.log(getCatrgorie());
    const data =await getData()
    console.log('data', data)
    return (
        <div className='flix flex-col space-y-3'>
            <h2 className='text-[#403f3f] text-xl font-semibold '>All Categorie</h2>
            <ul className='flex flex-col space-y-5 '>
                {data?.data?.news_category.map((item,index)=>(
                    <Link href={`/categorie/${item?.category_id}`} className={`text-[#9f9f9f] text-xl font-medium `} key={index}>{item?.category_name}</Link>
                ))}
            </ul>
        </div>
    );
}

export default CategoriesList;
