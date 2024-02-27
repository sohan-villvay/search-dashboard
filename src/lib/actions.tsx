'use server'

import { revalidatePath } from "next/cache";


export async function getData() {
  const response = await fetch('https://65cda6eec715428e8b3ebc7d.mockapi.io/api/v1/synonyms', { cache: 'no-store' })

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  revalidatePath('/synonyms');
  const data = await response.json()
  console.log("Get data")
  console.log(data)
  return data
}

export async function postData(data: any) {
  const response = await fetch('https://65cda6eec715428e8b3ebc7d.mockapi.io/api/v1/synonyms', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  revalidatePath('/synonyms');
  return await response.json();
}