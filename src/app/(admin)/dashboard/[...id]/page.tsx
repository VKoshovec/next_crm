import React from "react";
import Header from "@/app/componenets/header";


export interface PageProps {
    params: { id: string[] };
}

export default function Page({ params }:PageProps) {
  return <>
    <Header>Dashboard ({String(params.id)}) </Header>
    <p>{new Date().toTimeString()}</p>
    </>
}