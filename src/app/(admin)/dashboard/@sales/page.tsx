import React from 'react';
import { getSummarySales } from '@/lib/api';
import SummaryTable from '@/app/componenets/summary-table';
import SummaryTableHeader from '@/app/componenets/summary-table-header';
import SummaryTableCell from '@/app/componenets/summary-table-cell';
import DashboardCard from '@/app/componenets/dashboard-card';
import MagicButton from '@/app/componenets/magic-button';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data: any = await new Promise((res)=>{
    setTimeout(()=>{
      res(getSummarySales())
    }, 4000)
  });

  return (
    <DashboardCard label="Sales details">
      {/* <MagicButton/> */}
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map((el:any 
        // { companyId, companyTitle, sold, income }
        ) => (
          <tr key={el.companyId}>
            <SummaryTableCell>{el.companyTitle}</SummaryTableCell>
            <SummaryTableCell align="center">{el.sold}</SummaryTableCell>
            <SummaryTableCell align="center">{`$${el.income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}