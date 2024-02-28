"use client"

import type { DataProvider } from "@refinedev/core";

const API_URL = "https://65cda6eec715428e8b3ebc7d.mockapi.io/api/v1";

export const dataProvider: DataProvider = {
create: async ({ resource, variables }) => {
    const response = await fetch(`${API_URL}/${resource}`, {
      method: "POST",
      body: JSON.stringify(variables),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status < 200 || response.status > 299) throw response;

    const data = await response.json();

    return { data };
  },
    getList: async ({ resource, pagination, filters, sorters, meta }) => {
    const response = await fetch(`${API_URL}/${resource}`);

    if (response.status < 200 || response.status > 299) throw response;

    const data = await response.json();

    return {
      data,
      total: 0, 
    };
  },
  getOne: async ({ resource, id, meta }) => {
    const response = await fetch(`${API_URL}/${resource}/${id}`);

    if (response.status < 200 || response.status > 299) throw response;

    const data = await response.json();

    return { data };
  },
  update: async ({ resource, id, variables }) => {
    const response = await fetch(`${API_URL}/${resource}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(variables),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status < 200 || response.status > 299) throw response;

    const data = await response.json();

    return { data };
  },
  getApiUrl: () => API_URL,
  deleteOne: () => { throw new Error("Not implemented"); },
  /* ... */
};