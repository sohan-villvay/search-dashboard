"use client"

import { useOne } from "@refinedev/core";

export const ShowProduct = () => {
  const { data, isLoading } = useOne({ resource: "synonyms", id: "Welcome" });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>Product name: {data?.data.id}</div>;
};