'use client';

import React, { useEffect } from "react";
// import Header from "@/app/componenets/header";
import { notFound } from 'next/navigation';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { Company, getCompany, getPromotions } from '@/lib/api';
import getQueryClient from '@/lib/utils/getQueryClient';
import CompanyInfo from '@/app/componenets/company-info';
import CompanyPromotions from '@/app/componenets/company-promotions';



export interface PageProps {
    params: { id: string };
};

// export function generateStaticParams() {
//     return [{id: "1"}, {id: "2"}, {id: "3"}]
// }

// export default function Page({ params }:PageProps) {
export default async function Page({ params }: PageProps) {
    const queryClient = getQueryClient();
  
    await queryClient.prefetchQuery({
      queryKey: ['companies', params.id],
      queryFn: () => getCompany(params.id, { cache: 'no-store' }),
      staleTime: 10 * 1000,
    });
  
    await queryClient.prefetchQuery({
      queryKey: ['promotions', params.id],
      queryFn: () =>
        getPromotions({ companyId: params.id }, { cache: 'no-store' }),
      staleTime: 10 * 1000,
    });
  
    const company = queryClient.getQueryData(['companies', params.id]) as Company;
    if (!company) {
      notFound();
    }
  
    const dehydratedState = dehydrate(queryClient);

  // useEffect(()=>{
  //   const id = Number.parseInt(params.id);
  //   if (Number.isNaN(id)) {
  //     notFound();
  //   }
  // },[params.id]);

  return (
    // <div className="py-6 px-10">
    //   <p>{`Information about company (${params.id})`}</p>
    // </div>
    <HydrationBoundary state={dehydratedState}>
    <div className="py-6 px-10 grid grid-cols-12 gap-5">
      <div className="col-span-3">
        <CompanyInfo companyId={params.id} />
      </div>
      <div className="col-span-9">
        <CompanyPromotions companyId={params.id} />
      </div>
    </div>
  </HydrationBoundary>
  );
}