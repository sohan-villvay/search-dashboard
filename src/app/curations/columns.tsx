"use client"
 
import { ColumnDef } from "@tanstack/react-table"
import { DeleteSynonym } from "./delete";
 
export type Synonyms = {
  id: string;
  synonyms: string[];
};

export const columns: ColumnDef<Synonyms>[] = [
  {
                id: "id",
                header: "ID",
                accessorKey: "id",
                meta: {
                    filterOperator: "eq",
                },
            },
            {
                id: "synonyms",
                header: "Synonyms",
                accessorKey: "synonyms",
                meta: {
                    filterOperator: "contains",
                },
            },
            {
                id: "actions",
                enableHiding: false,
                cell: ({ row }) => {
                    const {id} = row.original

                    return (
                        <DeleteSynonym synonyms={row.original}/>
                    )

                }
            }
]