'use client';

import Button from '@/app/componenets/button';
import React from 'react';

export interface ErrorComponentProrps {
    error: Error;
    reset: () => void;
}

export default function ErrorComponent({ error, reset }:ErrorComponentProrps) {
    return (
        <div>
           <p>{ `Something went wrong ${ error.message }` }</p>
           <Button onClick={()=>{ reset() }}>Try again</Button>
        </div>
    );
}
