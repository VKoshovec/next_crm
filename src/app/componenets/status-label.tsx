import React from "react";

export enum Status {
    active="active",
    notactive="notactive",
    pending="pending",
    suspended="suspended"
}

export interface StatusLabelProps {
    children: React.ReactNode;
    status: Status;
};

export default function StatusLabel({ children, status }:StatusLabelProps){
    return <div className={`inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium ${
        status === Status.active && 'text-green-700 bg-green-100' ||
        status === Status.notactive && 'text-red-700 bg-red-100' ||
        status === Status.pending && 'text-orange-700 bg-orange-100' ||
        status === Status.suspended && 'text-blue-700 bg-blue-100' || ""
    }`}>
    <div className="w-1 h-1 mr-2 rounded-full bg-current"></div>    
    { children }
    </div>
};