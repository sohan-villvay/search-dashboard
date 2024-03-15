"use client"
 
import { ColumnDef } from "@tanstack/react-table"
import { DeleteSynonym } from "./delete";
import ClosableTag from "@components/synonyms/closable-tag";
import AddNewTag from "@components/synonyms/add-new-tag";
import { UpdateSynonymAdd } from "./update-add";
 
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
                cell: ({ row }) => {
                const items: string[] = row.getValue("synonyms");

                return (
                    <div className="flex">
                     <div className="flex flex-wrap">
                        {items.map((item, index) => (
                            <ClosableTag key={index} item={item} row={row.original}/>
                        ))}
                        </div>
                        <UpdateSynonymAdd row={row.original}/>
                    </div>
                );
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