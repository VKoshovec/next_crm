'use client';

// import React, { useState } from 'react';
import Button from './button';
// import dynamic from 'next/dynamic';

import React from 'react';
import { useRouter } from 'next/navigation';
// import CompanyFormModal from './company-form-modal';

// const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
//     ssr: false
// });

export default function AddCompanyButton () {

    // const [show, setShow] = useState(false);
    
    const router = useRouter();

    return (
      // <>
      //   <Button onClick={()=>{setShow(true)}}>Add company</Button>
      //   <CompanyFormModal
      //    onSubmit={()=>console.log()}
      //    show={show}
      //    onClose={()=>{setShow(false)}}
      //   />
      // </>
      <Button onClick={()=>router.push('/companies/new')}>Add company</Button>
    );
};