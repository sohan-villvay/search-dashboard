"use client"

import { useTable } from "@refinedev/core";
import React from "react";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export const ListProducts = () => {
  const { 
    tableQueryResult: { data, isLoading },
    
   } = useTable({ 
    resource: "synonyms",
    pagination: {
        mode: "off",
  }, 
});

  return (
    <div>
      <h1>Synonyms</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Synonyms</th>

          </tr>
        </thead>
        <tbody>
          {data?.data?.map((synonyms) => (
            <tr key={synonyms.id}>
              <td>{synonyms.id}</td>
              <td>{synonyms.synonyms}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
