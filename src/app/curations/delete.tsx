"use client"

import { Button } from "@components/ui/button";
import { useDelete } from "@refinedev/core";

export const DeleteSynonym = ({synonyms}) => {
const { mutate } = useDelete();

const onClick = () => {
    mutate({
    resource: "synonyms",
    id: synonyms.id,
    });
  };

  return <Button onClick={onClick}>Delete</Button>;
};