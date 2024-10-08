"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function DoctorList({ doctorList, heading = "Popular Doctors" }) {
    // console.log(doctorList[0]);
    return (
        <div className="mb-10 px-8">

            <h2 className="font-bold text-xl">{heading}</h2>
            <div className="grid grid-cols-2 gap-7 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 mt-4">

                {doctorList.length > 0 ? doctorList.map((doctor, index) => (
                    <div key={index} className="border-[1px] rounded-lg p-3 
                    cursor-pointer hover:border-primary hover:shadow-sm transition-all
                    ease-in-out
                    " >
                        <Image src={doctor.attributes?.image?.data?.attributes.url} alt="doctor" width={500} height={200}
                            className="h-[200px] w-full object-cover rounded-lg"
                        />
                        <div className="mt-3 items-baseline flex flex-col gap-1">
                            <h2 className="text-[10px] bg-blue-100 p-1 rounded  px-2 text-primary">{doctor.attributes?.categories.data[0].attributes?.Name}</h2>
                            <h2 className="font-bold"> {doctor.attributes?.Name}</h2>
                            <h2 className="text-primary text-sm"> {doctor.attributes?.Year_of_Experience} Years</h2>
                            <h2 className="text-gray-500 text-sm"> {doctor.attributes?.Address}</h2>
                            <Link href={'/details/' + doctor?.id} className="w-full">
                                <h2 className="p-2 px-3 border-[1px] border-primary text-primary rounded-full w-full text-center text-[11px] mt-2
                          cursor-pointer
                          hover:bg-primary hover:text-white
                          ">Book Now</h2>
                            </Link>
                        </div>
                    </div>

                )) :
                    [1, 2, 4, 5, 6].map((item, index) => (
                        <div key={index} className="h-[220px] bg-slate-100 w-full rounded-lg animate-pulse">

                        </div>)
                    )

                }
            </div>

        </div>
    )
}

export default DoctorList