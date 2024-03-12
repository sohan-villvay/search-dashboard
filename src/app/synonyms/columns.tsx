"use client"

import { ColumnDef } from "@tanstack/react-table"
import ClosableTag from "@components/synonyms/closable-tag"
import AddNewTag from "@components/synonyms/add-new-tag"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@components/ui/button"
import { Cross2Icon } from "@radix-ui/react-icons"

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
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const synonyms = row.original;

      return (
        <div className="invisible group-hover/row:visible">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                onClick={() => console.log(synonyms.id)}
                variant="ghost"
                size="icon"
                className="group -ml-7 h-7 w-7 rounded-full  transition duration-200 ease-in-out hover:bg-red-200"
              >
                <Cross2Icon className="h-4 w-4 text-red-700 group-hover:text-red-800" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will delete the synonym set permanantly.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      );
    },
  },

]
