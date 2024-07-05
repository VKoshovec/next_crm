import React from "react";
import Header from "../componenets/header";
import Toolbar from "../componenets/toolbar";
import SearchInput from "../componenets/search-input";
import AddCompanyButton from "../componenets/add-company-button";
import CompanyTable from "../componenets/company-table";
import CompanyRow from "../componenets/company-row";
import { Status } from "../componenets/status-label";


export interface PageProps {};

export default function Page({}:PageProps) {
  return <>
    <Header>Companies</Header>
    <Toolbar action={<AddCompanyButton/>}>
        <SearchInput/>
    </Toolbar>
    <CompanyTable>
        <CompanyRow 
        id={1}
        category={"Products"}
        company={"Costco"}
        status={Status.pending}
        promotion={true}
        country={"USA"}
        joinedDate={"02.19.2023"}
        />
    </CompanyTable>
    </>
};