"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import GlobalApi from '../_utils/GlobalApi'
import { useEffect, useState } from 'react'
import Image from 'next/image'
function CategorySearch() {

    const [categoryList, setCategoryList] = useState([]);
    const getCategoryList = () => {
        GlobalApi.getCategory().then(resp => {
            setCategoryList(resp.data.data);
        });
    }
    useEffect(() => {
        getCategoryList();
    }, []);

    return (

        <div className="mb-10 items-center flex flex-col gap-4">
            <h2 className="font-bold text-4xl tracking-wide">Search
                <span className="text-primary">
                    Doctors
                </span>
            </h2>
            <h2 className="text-gray-500 text-xl">Search Your Doctor and Book Appoinment</h2>
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" placeholder="Search" />
                <Button type="submit">
                    <Search className="h-4 w-4 mr-2" />
                    Search</Button>
            </div>
            {categoryList.map((item, index) => {
                <div  key={index} className="">

                    <h1>{item.attributes?.name}</h1>
                    <Image  src={item.attributes?.icon?.data.attributes?.url} alt="icon" width={40} height={40} />
                </div>
            })}

        </div>
    )
}

export default CategorySearch