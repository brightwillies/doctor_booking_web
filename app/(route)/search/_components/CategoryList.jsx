"use client"
import React, { useEffect, useState } from 'react'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import GlobalApi from '@/app/_utils/GlobalApi'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

function CategoryList() {

    const [categoryList, setCategoryList] = useState([]);
    const params = usePathname();
    const category = params.split('/')[2];

    const getCategoryList = () => {
        GlobalApi.getCategory().then(resp => {
            setCategoryList(resp.data.data);
        });
    }

    useEffect(() => {
        getCategoryList();
        console.log(params);

    }, []);

    return (
        <div className="h-screen mt-5  flex flex-col">
            <Command>
                <CommandInput placeholder="Search Category" />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        {categoryList && categoryList.map((item, index) => (
                            <CommandItem key={index}>
                                <Link href={'/search/'+ item?.attributes?.Name} className={`p-2 flex gap-2 text-[14px] text-blue-600  items-center rouded-md cursor-pointer pointer w-full
                                    ${category == item.attributes?.Name && 'bg-blue-100'}
                                    `}>
                                    <Image src={item.attributes.Icon.data.attributes.url}
                                        width={20}
                                        height={20} />

                                    <label>{item.attributes.Name}</label>
                                </Link>
                            </CommandItem>
                        ))}
                       
                
                    </CommandGroup>

                </CommandList>
            </Command>
        </div>
    )
}

export default CategoryList