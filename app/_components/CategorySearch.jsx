"use client"
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import GlobalApi from '../_utils/GlobalApi'
import Image from 'next/image'
import Link from 'next/link'

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

    // useEffect(() => {
    // }, [categoryList]);

    return (
        <div className="mb-10 items-center flex flex-col gap-4">
            <h2 className="font-bold text-4xl tracking-wide">
                Search <span className="text-primary">Doctors</span>
            </h2>
            <h2 className="text-gray-500 text-xl">Search Your Doctor and Book Appointment</h2>

            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Search" />
                <Button type="submit">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                </Button>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {categoryList.length > 0 ? categoryList.map((item, index) => index < 6 && (
                    <Link href={'/search/' + item.attributes.Name} key={index}
                        className="flex flex-col text-center items-center 
                            gap-2 p-5 bg-blue-50 m-2 rounded-lg 
                            hover:scale-110 transition-all ease-in-out 
                            cursor-pointer">
                        <h1 className="font-semibold">{item.attributes?.Name}</h1>
                        {item.attributes?.Icon?.data?.attributes?.url && (
                            <Image
                                src={item.attributes.Icon.data.attributes.url}
                                alt={item.attributes?.Icon?.data?.attributes?.name || "icon"}
                                width={40}
                                height={40}
                            />
                        )}
                    </Link>
                )) :

                    [1, 2, 4, 5, 6].map((item, index) => (
                        <div key={index}
                            className="h-[60px] flex flex-col text-center items-center 
                    gap-2 p-5 bg-blue-50 m-2 rounded-lg 
                    hover:scale-110 transition-all ease-in-out 
                    cursor-pointer"></div>))}
            </div>


        </div>
    );
}

export default CategorySearch;
