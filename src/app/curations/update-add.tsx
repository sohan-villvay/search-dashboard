"use client"

import { useState } from 'react'; // Import useState hook
import { Button } from "@components/ui/button";
import { useUpdate } from "@refinedev/core";
import { Input } from "@components/ui/input";
import { CheckIcon } from "@radix-ui/react-icons"

export const UpdateSynonymAdd = ({row}:{row:any}) => {
  const { mutate } = useUpdate();
  const [newSynonym, setNewSynonym] = useState("");

  const onClick = () => {
    const updatedSynonyms = [...row.synonyms, newSynonym];

    if (newSynonym != ""){
      mutate({
        resource: "synonyms",
        id: row.id,
        values:{
          synonyms: updatedSynonyms,
        }
      });
    }
    setNewSynonym("");
  };

  return (
    <div className="group  m-2 flex flex-row group-hover/row:visible">
      <Input 
        placeholder="+" 
        className="group h-7 w-7 rounded-full p-2 transition-all duration-200 ease-in-out focus:w-36 focus:placeholder-transparent"
        value={newSynonym} 
        onChange={(e) => setNewSynonym(e.target.value)}
      />

      <Button 
        onClick={onClick} 
        className="invisible ml-1 h-7 w-7 rounded-full bg-lime-600/50 p-2 group-focus-within:visible">
        <div className="text-white">
          <CheckIcon />
        </div>
      </Button>
    </div>
  );
};