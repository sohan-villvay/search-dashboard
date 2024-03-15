"use client"

import { Button } from "@components/ui/button";
import { useDelete, useUpdate } from "@refinedev/core";
import { Cross2Icon } from "@radix-ui/react-icons"

export const UpdateSynonymDelete = ({synonym, row}:{synonym:string, row:any}) => {
const { mutate } = useUpdate();

const onClick = () => {
    
    const indexToRemove = row.synonyms.indexOf(synonym);
    row.synonyms.splice(indexToRemove, 1);

    mutate({
    resource: "synonyms",
    id: row.id,
    values:{
        synonyms: row.synonyms,
    }
    });
  };

  return (
    <Button onClick={onClick} variant="ghost" size="icon" className="transition ease-in-out duration-200  rounded-full h-5 w-5 ml-1 hover:bg-red-800 group">
        <Cross2Icon className="h-3 w-3 group-hover:text-white" />
    </Button>
  );
};