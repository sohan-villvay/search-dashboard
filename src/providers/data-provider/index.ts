"use client";

import dataProviderSimpleRest from "@refinedev/simple-rest";

const API_URL = "https://65cda6eec715428e8b3ebc7d.mockapi.io/api/v1";

export const dataProvider = dataProviderSimpleRest(API_URL);
