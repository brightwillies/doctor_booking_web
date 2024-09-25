"use client";
import Image from 'next/image'
import React from 'react'
import Logo from "../../public/logo.svg";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LoginLink, LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { useEffect } from 'react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

function Header() {
    const Menu = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "Explore",
            path: "/"
        },
        {
            id: 3,
            name: "Contact Us",
            path: "/"
        }
    ]

    const { user } = useKindeBrowserClient();

    useEffect(() => {
        // console.log(user);
    }, [user])
    return (
        <div className="flex items-center justify-between p-4 shadow-sm">
            <div className="flex items-center gap-10">
                <Image src={Logo} width={180} height={80} />

                <ul className="md:flex gap-8 hidden">

                    {Menu.map((item, index) => (
                        <Link key={index} href={item.path}>
                            <li key={index} className="hover:text-primary cursor-pointerhover:scale-105
                        transition-all ease-in-out
                        ">{item.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>

            {user ?

                <Popover>
                    <PopoverTrigger>
                        <Image src={user?.picture} alt="image" width={50} height={50}
                            className="rounded bg-primary"
                        />
                    </PopoverTrigger>
                    <PopoverContent>
                        <ul className="flex flex-col gap-2">
                            <li className="cursor-pointer hover:bg-slate-100 p-2 rounded-md">Profile</li>
                            
                            <Link href={'/my-booking'} className="cursor-pointer hover:bg-slate-100 p-2 rounded-md">My Booking</Link>
                            <LogoutLink  className="cursor-pointer hover:bg-slate-100 p-2 rounded-md"> Logout </LogoutLink>
                        </ul>

                    </PopoverContent>
                </Popover>
                :
                <LoginLink>  <Button>Get started</Button></LoginLink>
            }



            {/* <RegisterLink>Sign up</RegisterLink> */}

        </div>
    )
}

export default Header