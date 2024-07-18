'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter();

  useEffect(()=>{
    router.push('/dashboard');
  },[router])

  return; 

  // return (
  //   <main>
  //     <h1 className="text-xl">Home page</h1>
  //   </main>
  // );
}
