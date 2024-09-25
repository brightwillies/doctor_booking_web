"use client"
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import React from 'react'
import { useEffect, useState } from "react";
import GlobalApi from "./_utils/GlobalApi";
import DoctorList from "./_components/DoctorList";
export default function Home() {

  const [doctorList, setDoctorList] = useState([]);

  const getDoctorlist = () => {

    GlobalApi.getDoctorlist().then(resp => {
      setDoctorList(resp.data.data);
    });
  }

  useEffect(() => {
    getDoctorlist();
  }, [])
    ;

  return (
    <div>
      {/* Heo section*/}
      <Hero />
      <CategorySearch />
      <DoctorList doctorList={doctorList} />

    </div>
  );
}
