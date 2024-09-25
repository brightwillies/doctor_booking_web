"use client";
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react';
import DoctorDetail from '../_components/DoctorDetail';
import DoctorSuggestionList from '../_components/DoctorSuggestionList';

function Details({ params }) {
  const [doctor, setDoctor] = useState([]);
  
  const getDoctorByTheId = async () => {
    console.log(params.recordld);
 await   GlobalApi.getDoctorById(params.recordld)
      .then(resp => {
        console.log(resp);
        setDoctor(resp.data.data);
      })
  };

  useEffect(() => {
    // console.log(params.recordld);

    getDoctorByTheId();
  },  [params.recordld])
  return (
    <div className="p-5 md:px-20">
      <h2 className="font-bold text-[22px]"> Details </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4">

        <div className="col-span-3">
          {doctor && <DoctorDetail doctor={doctor} />}
        </div>

<div>
  <DoctorSuggestionList/>
</div>
      </div>
    </div>

  )
}

export default Details