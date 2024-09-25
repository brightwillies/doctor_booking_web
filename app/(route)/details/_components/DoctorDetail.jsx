import { GraduationCap, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import fbIcon from "/public/fbIcon.png";
import iGIcon from "../../../../public/iGIcon.png";
import twitterIcon from "../../../../public/twitterIcon.png";
import linkedIcon from "../../../../public/linkedIcon.png";
import youtubeIcon from "../../../../public/youtubeIcon.png";
import { Button } from '@/components/ui/button';
import BookAppointment from './BookAppointment';


function DoctorDetail({ doctor }) {
    const socialMediaList = [
        {
            id: 1,
            icon: fbIcon
        },
        {
            id: 2,
            icon: iGIcon
        },
        {
            id: 3,
            icon: twitterIcon
        },
        {
            id: 4,
            icon: linkedIcon
        },
        {
            id: 5,
            icon: youtubeIcon
        }

    ]

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg">
                <div>
                    <Image src={doctor.attributes?.image?.data?.attributes.url} alt="doctor" width={200} height={200}
                        className="h-[270px] w-full object-cover rounded-lg"
                    />
                </div>

                <div className="col-span-2 flex md:px-10  flex-col items-baseline gap-3 mt-5">
                    <h2 className="font-bold text-2xl"> {doctor.attributes?.Name}</h2>
                    <h2 className="flex gap-2 text-gray-5">
                        <GraduationCap />
                        <span>{doctor.attributes?.Year_of_Experience} Years of Experience</span>
                    </h2>

                    <h2 className="text-md flex gap-2 text-gray-5">
                        <MapPin />
                        <span>{doctor.attributes?.Address}</span>
                    </h2>

                    <h2 className="text-[10px] bg-blue-100 p-1 rounded  px-2 text-primary">{doctor.attributes?.categories.data[0].attributes?.Name}</h2>
                    <div className="flex gap-3">
                        {socialMediaList.map((item, index) => (
                            <Image alt="image" key={index} src={item.icon} width={30} height={30} />
                        ))}
                    </div>
                    <BookAppointment  doctor={doctor}/>
                </div>
            </div>

            <div className="p-3 border-[1px] rounded-lg mt-5">
                <h2 className="font-bold text-[20px]">About me</h2>
                <div className="text-gray-500 tracking-wide mt-2"> {doctor.attributes?.About}</div>
            </div>
        </>
    )
}

export default DoctorDetail