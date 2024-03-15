"use client"

import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { useForm } from "@refinedev/core";

export const CreateProduct = () => {
  const { onFinish, mutationResult } = useForm({ action: "create", resource: "synonyms" });

 const onSubmit = (event) => {
    event.preventDefault();
    // const data = Object.fromEntries(new FormData(event.target).entries());

  const formData = new FormData(event.target);
    const synonymsValue = formData.get("synonyms");
    const synonyms = synonymsValue ? (synonymsValue as string).split(",").map(synonym => synonym.trim()) : [];
    const data = {
      id: formData.get("id"),
      synonyms: synonyms
    };
    onFinish({
        ...data,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <Input placeholder="Synonym ID" type="text" id="id" name="id" />
      <Input placeholder="Synonyms" id="synonyms" name="synonyms" />


      {mutationResult.isSuccess && <span>successfully submitted!</span>}
      <Button type="submit">Submit</Button>
    </form>
  );
};