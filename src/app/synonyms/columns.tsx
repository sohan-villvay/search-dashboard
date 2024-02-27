"use client"

import { ColumnDef } from "@tanstack/react-table"
import ClosableTag from "@components/synonyms/closable-tag"
import AddNewTag from "@components/synonyms/add-new-tag"

export type Synonyms = {
  id: string
  synonyms: string[]
}

export const columns: ColumnDef<Synonyms>[] = [
  // {
  //   accessorKey: "id",
  //   header: "ID",
  // },
  {
    accessorKey: "synonyms",
    header: "Synonyms",
    cell: ({ row }) => {
      const items: string[] = row.getValue("synonyms")

      return <div className="flex">
        <ClosableTag items={items} />

        <AddNewTag />

      </div>
    },
  }

]
