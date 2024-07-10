'use client';

import React, { useEffect } from "react";
import Header from "@/app/componenets/header";
import { notFound } from "next/navigation";


export interface PageProps {
    params: { id: string };
};

// export function generateStaticParams() {
//     return [{id: "1"}, {id: "2"}, {id: "3"}]
// }

export default function Page({ params }:PageProps) {

  // useEffect(()=>{
  //   const id = Number.parseInt(params.id);
  //   if (Number.isNaN(id)) {
  //     notFound();
  //   }
  // },[params.id]);

  return (
    <div className="py-6 px-10">
      <p>{`Information about company (${params.id})`}</p>
    </div>
  );
}