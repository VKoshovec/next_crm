import React from "react";
import style from './not-active-label.module.css'

export interface NotActiveLabelProps {
    children: React.ReactNode;
};

export default function NotActiveLabe({ children }:NotActiveLabelProps){
    return <span className={ style.label }>{ children }</span>;
};