'use client'

import React from 'react';
import Link from 'next/link';

export interface NotFoundProrps{};

export default function NotFound({}: NotFoundProrps) {

    return (
        <div>
            <p>Could not find company</p>
            <Link href="/companies" className='text-blue-500'>
              Back to Companies
            </Link>
        </div>
    );
}