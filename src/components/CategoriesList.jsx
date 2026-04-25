import React, { use } from 'react';
    const res =  fetch("https://openapi.programming-hero.com/api/news/categories").then(res=>res.json())

const CategoriesList = () => {
    // console.log(getCatrgorie());
    const data = use(res)
    return (
        <div className='flix flex-col space-y-3'>
            <h2 className='text-[#403f3f] text-xl font-semibold '>All Categorie</h2>
            <ul className='flex flex-col space-y-5 '>
                {data?.data?.news_category.map((item,index)=>(
                    <li className={`text-[#9f9f9f] text-xl font-medium `} key={index}>{item?.category_name}</li>
                ))}
            </ul>
        </div>
    );
}

export default CategoriesList;
