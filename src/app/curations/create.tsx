"use client"

import { useForm } from "@refinedev/core";

export const CreateProduct = () => {
  const { onFinish, mutationResult } = useForm({ action: "create", resource: "synonyms" });

 const onSubmit = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target).entries());

    onFinish({
        ...data,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="id">id</label>
      <input type="text" id="id" name="id" />

      <label htmlFor="synonyms">Description</label>
      <textarea id="synonyms" name="synonyms" />


      {mutationResult.isSuccess && <span>successfully submitted!</span>}
      <button type="submit">Submit</button>
    </form>
  );
};