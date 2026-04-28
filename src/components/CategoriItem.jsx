"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const CategoriItem = ({item}) => {
    const pathName = usePathname()
    const activeId = pathName.split("/")[2]
    return (
        <div>
            <Link href={`/categorie/${item?.category_id}`} className={`w-[70%] text-[#9f9f9f]  text-xl font-medium  ${item?.category_id ==activeId ? "bg-blue-600 p-2 xl:block text-white rounded-2xl" :""}`}>{item?.category_name}</Link>
        </div>
    );
}

export default CategoriItem;
