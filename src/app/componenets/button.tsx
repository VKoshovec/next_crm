'use client';

import clsx from 'clsx';
import React from 'react';

export interface ButtonProps 
extends Partial<React.ReactHTMLElement<HTMLButtonElement>> {
    disabled?: boolean;
    children: any;
}

export default function Button({disabled, ...rest}:ButtonProps) {
    return (
        <button {...rest} type='button' className={
            clsx('py-2.5 px-5 bg-gray-500 text-zinc-50 text-center font-medium rounded', 
                !disabled && 'hover:bg-gray-800 active:bg-gray-950',
                disabled && 'text-zinc-100')}
                /> 
            );
}
