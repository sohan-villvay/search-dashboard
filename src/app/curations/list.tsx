"use client"

import { CrudFilters, useList, useTable } from "@refinedev/core";
import React from "react";
import { DataTable } from "./data-table";
import { Synonyms, columns } from "./columns";

export const ListSynonyms = () => {
  
  const { tableQueryResult: { data, isLoading },} = useTable({ 
    resource: "synonyms",
    pagination: {
        mode: "off",
  }, 

});

const synonyms = data?.data ??[]

  return (
    <div>
     <DataTable columns={columns} data={synonyms}/>
    </div>
  );
};
