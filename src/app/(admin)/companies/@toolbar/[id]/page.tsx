import React from 'react';
// import Header from '@/app/componenets/header';

import Toolbar from '@/app/componenets/toolbar';
import SearchInput from '@/app/componenets/search-input';
import AddPromotionButton from '@/app/componenets/add-promotion-button';

// export interface PageProps {}
export interface PageProps {
  params: { id: string };
};

// export default function Page({}: PageProps) {
//   return null;
// }

export default function Page({ params }: PageProps) {
  return (
    <Toolbar action={<AddPromotionButton companyId={params.id} />}>
      <SearchInput />
    </Toolbar>
  );
}