"use client";

import { Suspense } from "react";

import { WelcomePage } from "@refinedev/core";

export default function IndexPage() {
  return (
    <Suspense>
      <main className="">
        <h2 className="text-xl font-medium text-center">Home</h2>

      </main>
    </Suspense>
  );
}
