'use client'

import React from 'react';

export interface ErrorComponentProrps {
    error:Error;
};

export default function ErrorComponent({}:ErrorComponentProrps) {
    return (
        <div>Unexpected error inside slot sale</div>
    );
};