import React from 'react';
// import Header from '@/app/componenets/header';
import Toolbar from '@/app/componenets/toolbar';
import SearchInput from '@/app/componenets/search-input';
import AddCompanyButton from '@/app/componenets/add-company-button';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <Toolbar action={<AddCompanyButton />}>
      <SearchInput />
    </Toolbar>
  );
}