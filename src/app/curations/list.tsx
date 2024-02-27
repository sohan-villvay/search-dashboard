"use client"

import { useList } from "@refinedev/core";

export const ListProducts = () => {
  const { data, isLoading } = useList({ 
    resource: "synonyms",
    pagination: {
        mode: "off",
  }, 
});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Synonyms</h1>
      <ul>
        {data?.data?.map((synonyms) => (
          <li key={synonyms.id}>
            <p>
              {synonyms.synonyms}
              <br />
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};